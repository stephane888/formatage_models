"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEditEntity"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEditEntity"] || []).push([[451],{

/***/ 6451:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EditEntity; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/EditEntity.vue?vue&type=template&id=5f1dca04&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('modalForm', {
    attrs: {
      "title-modal": _vm.titleModal,
      "manage-modal": _vm.manageModal
    },
    on: {
      "closeModal": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c('HCardIcon', {
          attrs: {
            "with-mb": false
          },
          scopedSlots: _vm._u([{
            key: "titre",
            fn: function () {
              return [_c('span', [_vm._v(" Modifier le contenu ")])];
            },
            proxy: true
          }, {
            key: "default",
            fn: function () {
              return [_c('span', [_vm._v(" Veillez remplir les champs ci-dessous et enregistrer ")]), _c('br'), _c('span', [_vm._v(" En cas de probleme ou d'incomprehension , veillez nous "), _c('a', {
                attrs: {
                  "href": "#"
                }
              }, [_vm._v(" laisser un message ")])])];
            },
            proxy: true
          }])
        })];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/ModalForm.vue?vue&type=template&id=34cf2a0a&
var ModalFormvue_type_template_id_34cf2a0a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-modal', {
    attrs: {
      "id": "b-modal-manage-project",
      "title": "BootstrapVue",
      "size": "lg",
      "footer-bg-variant": "light",
      "header-bg-variant": "light",
      "hide-footer": false,
      "no-close-on-backdrop": false
    },
    on: {
      "ok": _vm.handleOk
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function () {
        return [_vm._t("header")];
      },
      proxy: true
    }, {
      key: "default",
      fn: function () {
        return [_c('formEdit', {
          ref: "formEdit"
        })];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function ({
        cancel
      }) {
        return [_c('b-button', {
          attrs: {
            "size": "md",
            "variant": "info"
          },
          on: {
            "click": _vm.handleOk
          }
        }, [_c('b-icon', {
          attrs: {
            "icon": "save2",
            "variant": "white"
          }
        }), _vm._v(" Enregister ")], 1), _c('b-button', {
          attrs: {
            "size": "md",
            "variant": "outline-secondary"
          },
          on: {
            "click": function ($event) {
              return cancel();
            }
          }
        }, [_vm._v(" Annuler ")])];
      }
    }], null, true),
    model: {
      value: _vm.openModel,
      callback: function ($$v) {
        _vm.openModel = $$v;
      },
      expression: "openModel"
    }
  });
};
var ModalFormvue_type_template_id_34cf2a0a_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/FormuLaire.vue?vue&type=template&id=d78d4652&
var FormuLairevue_type_template_id_d78d4652_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.show ? _c('b-form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      },
      "reset": _vm.onReset
    }
  }, _vm._l(_vm.buildFields(), function (container, i) {
    return _c(container.template, {
      key: i,
      tag: "component",
      attrs: {
        "entity": container.entity,
        "class-entity": ['pt-1']
      }
    }, _vm._l(container.fields, function (render, k) {
      return _c(render.template, {
        key: k,
        tag: "component",
        attrs: {
          "field": render.field,
          "model": render.model,
          "entities": render.entities,
          "class-css": ['mb-5'],
          "parent-name": i + '.entity.',
          "parent-child-name": i + '.entities.',
          "namespace-store": ""
        },
        on: {
          "addNewValue": function ($event) {
            return _vm.addNewValue($event, render);
          },
          "removeField": function ($event) {
            return _vm.removeField($event, render);
          },
          "array_move": function ($event) {
            return _vm.array_move($event, render);
          }
        }
      });
    }), 1);
  }), 1) : _vm._e()], 1);
};
var FormuLairevue_type_template_id_d78d4652_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./src/request.js
var request = __webpack_require__(4269);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5340);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/js/FormUttilities.js
var FormUttilities = __webpack_require__(7657);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 92 modules
var loadField = __webpack_require__(1517);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/FormuLaire.vue?vue&type=script&lang=js&





/* harmony default export */ var FormuLairevue_type_script_lang_js_ = ({
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)({
      currentEntityForm: state => state.currentEntityForm
    }),
    idEntity() {
      if (this.form.label !== "") {
        var id = request/* default.generateIdEntityType */.Z.generateIdEntityType(this.form.label);
        this.setId(id);
        return id;
      } else return "";
    }
  },
  methods: {
    /**
     * @private
     * @param {*} event
     */
    onSubmit(event) {
      this.submit();
    },
    /**
     * @public
     */
    submit() {
      return this.$store.dispatch("saveEntities");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      // ...
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    setId(id) {
      // Si l'uuid n'existe pas, alors c'est une creation de type, on peut generer l'id.
      if (!this.form.uuid) this.form.id = id;
    },
    buildFields() {
      var fields = [];
      loadField/* default.setConfig */.Z.setConfig(request/* default */.Z);
      console.log("this.currentEntityForm  :", this.currentEntityForm);
      if (this.currentEntityForm.length) {
        fields = FormUttilities/* default.generateFields */.Z.generateFields(this.currentEntityForm, fields);
      }
      return fields;
    },
    addNewValue(value, render) {
      this.model[render.field.name].push(value);
    },
    removeField(index, render) {
      this.model[render.field.name].splice(index, 1);
    },
    array_move(evt, render) {
      const moveItem = (arr, fromIndex, toIndex) => {
        let itemRemoved = arr.splice(fromIndex, 1); // assign the removed item as an array
        arr.splice(toIndex, 0, itemRemoved[0]); // insert itemRemoved into the target index
        return arr;
      };
      const vals = moveItem(this.model[render.field.name], evt.oldIndex, evt.newIndex);
      this.$store.dispatch("setValue", {
        value: vals,
        fieldName: render.field.name
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/App/FormuLaire.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_FormuLairevue_type_script_lang_js_ = (FormuLairevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/App/FormuLaire.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  App_FormuLairevue_type_script_lang_js_,
  FormuLairevue_type_template_id_d78d4652_render,
  FormuLairevue_type_template_id_d78d4652_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormuLaire = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/ModalForm.vue?vue&type=script&lang=js&

/* harmony default export */ var ModalFormvue_type_script_lang_js_ = ({
  components: {
    formEdit: FormuLaire
  },
  props: {
    manageModal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    openModel: {
      get() {
        if (this.manageModal) return true;
        return false;
      },
      set(value) {
        this.$emit("closeModal", value);
      }
    }
  },
  methods: {
    handleOk(event) {
      event.preventDefault();
      // alert("F2");
      this.$refs.formEdit.submit().then(() => {
        this.$bvModal.hide("b-modal-manage-project");
        // window.location.assign(window.location.pathname);
      }).catch(er => {
        // On doit afficher sur le modal.
        console.log("error : ", er);
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/App/ModalForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_ModalFormvue_type_script_lang_js_ = (ModalFormvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/ModalForm.vue





/* normalize component */
;
var ModalForm_component = (0,componentNormalizer/* default */.Z)(
  App_ModalFormvue_type_script_lang_js_,
  ModalFormvue_type_template_id_34cf2a0a_render,
  ModalFormvue_type_template_id_34cf2a0a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalForm = (ModalForm_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/EditEntity.vue?vue&type=script&lang=js&


/* harmony default export */ var EditEntityvue_type_script_lang_js_ = ({
  name: "EditEntity",
  components: {
    modalForm: ModalForm
  },
  data() {
    return {
      titleModal: "",
      manageModal: false
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)({
      currentEntityInfo: state => state.currentEntityInfo
    })
  },
  mounted() {
    this.check_edit_entity();
  },
  methods: {
    check_edit_entity() {
      document.addEventListener("formatage_models_data_quick_edit_vuejs", even => {
        if (even.detail && even.detail.id) {
          // on verifie s'il faut netoyer les données.
          if (this.currentEntityInfo.id && even.detail.id != this.currentEntityInfo.id) {
            this.$store.dispatch("cleanDatas").then(() => {
              this.initEdit(even);
            });
          } else this.initEdit(even);
        }
      }, false);
    },
    initEdit(even) {
      console.log("initEdit : ", even.detail);
      this.openModal();
      this.$store.dispatch("set_currentEntityForm", even.detail).then(() => {
        this.$store.dispatch("loadForm");
      });
    },
    openModal() {
      if (this.manageModal) this.manageModal = false;else this.manageModal = true;
    },
    closeModal() {
      this.manageModal = false;
    }
  }
});
;// CONCATENATED MODULE: ./src/App/EditEntity.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_EditEntityvue_type_script_lang_js_ = (EditEntityvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/EditEntity.vue





/* normalize component */
;
var EditEntity_component = (0,componentNormalizer/* default */.Z)(
  App_EditEntityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditEntity = (EditEntity_component.exports);

/***/ })

}]);
//# sourceMappingURL=EditEntity.umd.451.js.map