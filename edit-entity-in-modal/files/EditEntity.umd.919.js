"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEditEntity"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEditEntity"] || []).push([[919],{

/***/ 5919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsEntities; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=template&id=14cca942&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-form-group', {
    attrs: {
      "label": _vm.field.label
    }
  }, [_c('b-form-radio-group', {
    attrs: {
      "options": _vm.options,
      "name": _vm.field.name
    },
    on: {
      "change": _vm.input
    },
    model: {
      value: _vm.selected,
      callback: function ($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(6352);
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.array.push.js
var modules_es_array_push = __webpack_require__(5251);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/utilities.js + 1 modules
var utilities = __webpack_require__(797);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/Confs.js
var Confs = __webpack_require__(6375);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/buildFilter.js
var buildFilter = __webpack_require__(5735);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/itemsEntity.js




class itemsEntity {
  constructor(entity_type_id, bundle = null, config = null) {
    this.entity_type_id = entity_type_id;
    //
    if (!bundle) {
      bundle = entity_type_id;
    }
    this.url = Confs/* default.baseURl */.Z.baseURl + "/" + this.entity_type_id + "/" + bundle;
    this.items = [];
    // en function de l'environement on doit ajouter les paramettres de bases.( notament baseUrl, TestDomain, les methodes surchargées ).
    if (config) {
      utilities/* default */.Z = {
        ...utilities/* default */.Z,
        ...config
      };
    }
  }
  /**
   * Recupere les items
   */
  get() {
    return new Promise(resolv => {
      utilities/* default.dGet */.Z.dGet(this.url, Confs/* default.headers */.Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Recupere les items
   */
  getSearch(search) {
    const filter = new buildFilter/* default */.Z();
    filter.addFilter("name", "CONTAINS", search);
    return new Promise(resolv => {
      utilities/* default.dGet */.Z.dGet(this.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValue(term) {
    const filter = new buildFilter/* default */.Z();
    filter.addFilter("name", "=", term);
    return new Promise(resolv => {
      utilities/* default.dGet */.Z.dGet(this.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValueByTid(id) {
    const filter = new buildFilter/* default */.Z();
    filter.addFilter("tid", "=", id);
    return new Promise((resolv, reject) => {
      utilities/* default.dGet */.Z.dGet(this.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      }).catch(er => {
        reject(er);
      });
    });
  }

  /**
   *
   * @returns *
   */
  getValueById(id) {
    const filter = new buildFilter/* default */.Z();
    filter.addFilter("id", "=", id);
    return new Promise(resolv => {
      utilities/* default.get */.Z.get(this.url + "?" + filter.query, Confs/* default.headers */.Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Retourne les termes sous formes de liste d'otpions.
   */
  getOptions() {
    const options = [];
    for (const i in this.items.data) {
      const term = this.items.data[i];
      if (term.attributes.name && term.attributes.drupal_internal__uid) options.push({
        text: term.attributes.name,
        value: term.attributes.drupal_internal__uid
      });
    }
    return options;
  }
}
/* harmony default export */ var jsonApi_itemsEntity = (itemsEntity);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 92 modules
var loadField = __webpack_require__(1517);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=script&lang=js&



/* harmony default export */ var OptionsEntitiesvue_type_script_lang_js_ = ({
  name: "OptionsTaxonomy",
  components: {},
  props: {
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      options: [],
      selected: null
    };
  },
  mounted() {
    this.loadTerms();
  },
  methods: {
    loadTerms() {
      let vocabulary = this.getFistVocab();
      console.log("vocabulary : ", vocabulary);
      if (vocabulary && loadField/* default.config */.Z.config) {
        const terms = new jsonApi_itemsEntity(vocabulary, vocabulary, loadField/* default.config */.Z.config);
        terms.get().then(() => {
          this.options = terms.getOptions();
        });
      }
    },
    getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        const keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else if (this.field.definition_settings.target_type) {
        return this.field.definition_settings.target_type;
      } else return null;
    },
    input(val) {
      const vals = [];
      vals.push({
        target_id: val
      });
      this.$emit("setValue", vals);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_OptionsEntitiesvue_type_script_lang_js_ = (OptionsEntitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_OptionsEntitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsEntities = (component.exports);

/***/ })

}]);
//# sourceMappingURL=EditEntity.umd.919.js.map