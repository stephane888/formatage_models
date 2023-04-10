import Vue from "vue";
import Vuex from "vuex";
import request from "../request";
import generateField from "components_h_vuejs/src/js/FormUttilities";
import loadField from "components_h_vuejs/src/components/fieldsDrupal/loadField";
import ckeditorConfig from "components_h_vuejs/src/components/Ressouces/ckeditor-config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /**
     * Contient l'entite qui est encours d'edition.
     */
    currentEntityInfo: {},
    /**
     * Contient les données du formulaires.
     */
    currentEntityForm: [],

    //
    running: false,
    //
    user: {},
    /**
     * Permet de suivre la creation des entites.
     */
    run_entity: {
      numbers: 0,
      creates: 0,
      page: "",
    },
    /**
     * Contient la structure du formulaire.
     */
    fields: [],
    /**
     * Suit la construction des formualires.
     */
    building_fields: false,
    /**
     *  Permet de definir un temps moyen pour la constructin d'un formulaire.
     */
    RunBuildingForm: {
      time: 3000,
      timeout: null,
    },
  },
  getters: {},
  mutations: {
    SET_CURRENT_ENTITY_INFO(state, payload) {
      state.currentEntityInfo = payload;
    },
    SET_CURRENT_ENTITY_FORM(state, payload) {
      state.currentEntityForm = payload;
    },
    ACTIVE_RUNNING(state) {
      state.running = true;
    },
    DISABLE_RUNNING(state) {
      state.running = false;
    },
    /**
     * il est assez complique de suivre, la construction d'un formulaire;
     * donc, on va fixer une valeur de 3s par appel.
     * @param {*} state
     */
    RUN_BUILDING_FIELDS(state) {
      state.building_fields = true;
      clearTimeout(state.RunBuildingForm.timeout);
      state.RunBuildingForm.timeout = setTimeout(() => {
        state.building_fields = false;
      }, state.RunBuildingForm.time);
    },

    // https://stackoverflow.com/questions/64635384/write-data-to-a-nested-dictionary-given-a-key-path-of-unknown-length/64641327#64641327.
    // https://stackoverflow.com/questions/66236245/multi-level-dynamic-key-setting.
    // https://lodash.com/docs/4.17.15#update
    // il faudra faire un tuto
    SET_VALUE(state, payload) {
      console.log(" SET_VALUE payload ", payload);
      function updateSettings(settings, keyPath, value) {
        const keys = keyPath.split(".");
        const targetKey = keys.pop();
        let current = settings;
        for (let i = 0; i < keys.length; ++i) {
          current = current[keys[i]];
          if (!current) {
            throw new Error(" Specified key not found. " + keys[i]);
          }
        }
        current[targetKey] = value;
      }
      updateSettings(state.currentEntityForm, payload.fieldName, payload.value);
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_FIELDS(state, payload) {
      state.fields = payload;
    },
  },
  actions: {
    set_currentEntityForm({ commit }, payload) {
      commit("SET_CURRENT_ENTITY_INFO", payload);
    },
    loadForm({ commit, state, dispatch }) {
      commit("ACTIVE_RUNNING");
      const param = {
        id: state.currentEntityInfo.id,
        entity_type_id: state.currentEntityInfo.entityTypeId,
        duplicate: false,
      };

      return request
        .bPost("/apivuejs/edit-duplicate-entity", param, {}, false)
        .then((resp) => {
          commit("DISABLE_RUNNING");
          commit("SET_CURRENT_ENTITY_FORM", resp.data);
          dispatch("buildFields");
        });
    },
    saveEntities({ commit, state }) {
      return new Promise((resolv, reject) => {
        commit("ACTIVE_RUNNING");
        generateField
          .getNumberEntities(state.currentEntityForm)
          .then((numbers) => {
            state.run_entity.numbers = numbers;
            generateField
              .prepareSaveEntities(
                this,
                state.currentEntityForm,
                state.run_entity
              )
              .then((resp) => {
                commit("DISABLE_RUNNING");
                resolv(resp);
              })
              .catch((er) => {
                commit("DISABLE_RUNNING");
                reject(er);
              });
          })
          .catch((er) => {
            commit("DISABLE_RUNNING");
            reject(er);
          });
      });
    },
    saveEntity({ commit }, payload) {
      return new Promise((resolv, reject) => {
        commit("ACTIVE_RUNNING");
        if (payload.entity_type_id == undefined || !payload.entity_type_id) {
          reject("Paramettre manquant");
        } else
          request
            .bPost(
              "/apivuejs/save-entity/" + payload.entity_type_id,
              payload.value
            )
            .then((resp) => {
              console.log("resp : ", resp);
              // setTimeout(() => {
              console.log(" payload : ", payload);
              resolv(resp);
              // }, 1000);
            })
            .catch((er) => {
              reject(er);
            });
      });
    },
    cleanDatas({ commit }) {
      commit("SET_CURRENT_ENTITY_INFO", {});
      commit("SET_CURRENT_ENTITY_FORM", {});
      commit("SET_FIELDS", []);
    },
    // Permet de mettre à jour un champs ...
    setValue({ commit }, payload) {
      commit("SET_VALUE", payload);
    },
    buildFields({ commit, state }) {
      var fields = [];
      //
      loadField.setConfig(request);
      var style = "";
      // pour les domaines wb-horizon. on essaie de recuperer la css genrer pour le theme.
      if (window.location.host.includes("wb-horizon.")) {
        // style =
        //   "@import 'https://wb-horizon.com/themes/custom/wb_horizon_com/css/vendor-style.css';";
        const themeName = window.location.host
          .replaceAll("-", "_")
          .replaceAll(".", "_");
        style +=
          "@import '" +
          window.location.protocol +
          "//" +
          window.location.host +
          "/themes/custom/" +
          themeName +
          "/css/vendor-style.css';";
        style +=
          "@import '" +
          window.location.protocol +
          "//" +
          window.location.host +
          "/themes/custom/" +
          themeName +
          "/css/global-style.css';";
        // style += "body{padding:1rem !important;}";
        // console.log("style", style);
        ckeditorConfig.getImportCss = function () {
          return (
            "@import '" +
            request.getBaseUrl() +
            "/themes/contrib/wb_universe/node_modules/%40fortawesome/fontawesome-free/css/all.min.css'; " +
            style
          );
        };
      } else {
        // il est preferable que cela soit un paramettre au niveau du module drupal.
        ckeditorConfig.getImportCss = function () {
          return (
            "@import '" +
            request.getBaseUrl() +
            "/themes/contrib/wb_universe/node_modules/%40fortawesome/fontawesome-free/css/all.min.css'; " +
            style
          );
        };
      }

      commit("RUN_BUILDING_FIELDS");
      if (state.currentEntityForm.length) {
        generateField
          .generateFields(state.currentEntityForm, fields)
          .then((resp) => {
            console.log(" end buildFields resp : ", resp);
            commit("SET_FIELDS", resp);
          });
      }
    },
  },
  modules: {},
});
