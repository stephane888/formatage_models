"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkEditEntity"] = (typeof self !== 'undefined' ? self : this)["webpackChunkEditEntity"] || []).push([[708],{

/***/ 708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsAllowedValues; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=template&id=6505b50f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "d-none for-test"
  }, [_vm._v("options value : " + _vm._s(_vm.field.type))]), _c('ValidationProvider', {
    attrs: {
      "name": _vm.fullname,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (validation) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label
          }
        }, [_vm.field.type == 'options_select' ? _c('b-form-select', {
          attrs: {
            "options": _vm.options_allowed_values,
            "state": _vm.getValidationState(validation),
            "name": _vm.fullname
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
        }) : _c('b-form-radio-group', {
          attrs: {
            "options": _vm.options_allowed_values,
            "name": _vm.fullname,
            "state": _vm.getValidationState(validation)
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
        })], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(6352);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 132 modules
var loadField = __webpack_require__(859);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=script&lang=js&


/* harmony default export */ var OptionsAllowedValuesvue_type_script_lang_js_ = ({
  name: "OptionsAllowedValues",
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
    },
    fullname: {
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
  computed: {
    options_allowed_values() {
      const options = [];
      if (this.field.definition_settings.allowed_values) {
        for (const i in this.field.definition_settings.allowed_values) {
          options.push({
            value: i,
            text: this.field.definition_settings.allowed_values[i]
          });
        }
      }
      return options;
    },
    is_target_type() {
      if (this.field.definition_settings.target_type) return true;else return false;
    },
    is_multiple() {
      if (this.field.cardinality === 1) return false;else return true;
    }
  },
  mounted() {
    this.selected = this.getValue();
  },
  methods: {
    getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        const keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else return null;
    },
    input(val) {
      const vals = [];
      if (this.is_target_type) vals.push({
        target_id: val
      });else vals.push({
        value: val
      });
      this.$emit("setValue", vals);
    },
    /**
     * Cette approche a apparament un soucis car il ne tient pas en compte le multiple value.
     */
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        if (this.is_target_type) return this.model[this.field.name][0].target_id;else return this.model[this.field.name][0].value;
      }
      return null;
    },
    getValidationState(validation) {
      var valid = true;
      return (validation.dirty || validation.validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField/* default.getRules */.Z.getRules(this.field);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_OptionsAllowedValuesvue_type_script_lang_js_ = (OptionsAllowedValuesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_OptionsAllowedValuesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsAllowedValues = (component.exports);

/***/ })

}]);
//# sourceMappingURL=EditEntity.umd.708.js.map