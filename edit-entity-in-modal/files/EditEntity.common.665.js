"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkedit_entity_in_layout"] = (typeof self !== 'undefined' ? self : this)["webpackChunkedit_entity_in_layout"] || []).push([[665],{

/***/ 3665:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EditEntity; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/EditEntity.vue?vue&type=template&id=1f50947c&
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

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/ModalForm.vue?vue&type=template&id=3e311296&
var ModalFormvue_type_template_id_3e311296_render = function render() {
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
var ModalFormvue_type_template_id_3e311296_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/FormuLaire.vue?vue&type=template&id=4ecaedd9&
var FormuLairevue_type_template_id_4ecaedd9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.show ? _c('b-form', {
    on: {
      "submit": _vm.onSubmit,
      "reset": _vm.onReset
    }
  }, _vm._l(_vm.buildFields(), function (render, k) {
    return _c(render.template, {
      key: k,
      tag: "component",
      attrs: {
        "field": render.field,
        "model": render.model,
        "class-css": ['mb-5'],
        "namespace-store": ""
      },
      on: {
        "addNewValue": function ($event) {
          return _vm.addNewValue($event, render);
        },
        "removeField": function ($event) {
          return _vm.removeField($event, render);
        }
      }
    });
  }), 1) : _vm._e()], 1);
};
var FormuLairevue_type_template_id_4ecaedd9_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./src/request.js
var request = __webpack_require__(1564);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(408);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(3797);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue?vue&type=template&id=22dda04a&
var drupal_stringvue_type_template_id_22dda04a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('div', {
          staticClass: "field-item-value"
        }, [_c('b-form-input', {
          attrs: {
            "placeholder": _vm.field.placeholder,
            "state": _vm.getValidationState(v),
            "name": _vm.field.name,
            "debounce": "500"
          },
          on: {
            "input": _vm.input
          },
          model: {
            value: _vm.input_value,
            callback: function ($$v) {
              _vm.input_value = $$v;
            },
            expression: "input_value"
          }
        })], 1), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])];
      }
    }])
  })], 1);
};
var drupal_stringvue_type_template_id_22dda04a_staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.array.push.js
var modules_es_array_push = __webpack_require__(6352);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(8673);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(4960);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/vee-validation-rules.js


// No message specified.
(0,vee_validate_esm/* extend */.l7)("email", rules/* email */.Do);
// Override the default message.
(0,vee_validate_esm/* extend */.l7)("required", {
  ...rules/* required */.C1,
  message: "Ce champs est requis"
});
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* alpha */.Fq);
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* numeric */.uR);
//export default extend;
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue?vue&type=script&lang=js&




/* harmony default export */ var drupal_stringvue_type_script_lang_js_ = ({
  name: "DrupalString",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
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
      input_value: null
    };
  },
  watch: {
    /**
     * Lorsque le champs est constrit via les boucle dynamique,
     * le template n'est pas reconstruit ducoup la valeur du precedent champs est concerservé.
     * On applique ce watch et on verra les resultats.
     * Cela ne s'execute que dans le cadre d'un watch et permet de ressoudre le probleme.
     */
    field() {
      this.input_value = this.getValue();
    }
  },
  mounted() {
    //On recupere la valeur par defaut pour chaque construction:
    this.input_value = this.getValue();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      } else return null;
    },
    input(v) {
      const vals = [];
      vals.push({
        value: v
      });
      this.setValue(vals);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_stringvue_type_script_lang_js_ = (drupal_stringvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_stringvue_type_script_lang_js_,
  drupal_stringvue_type_template_id_22dda04a_render,
  drupal_stringvue_type_template_id_22dda04a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_string = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue?vue&type=template&id=e9f68b24&
var drupal_linkvue_type_template_id_e9f68b24_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('div', {
          staticClass: "field-item-value"
        }, [_c('b-form-input', {
          attrs: {
            "placeholder": _vm.field.placeholder,
            "state": _vm.getValidationState(v),
            "name": _vm.field.name + 'title'
          },
          on: {
            "input": _vm.input
          },
          model: {
            value: _vm.input_value.title,
            callback: function ($$v) {
              _vm.$set(_vm.input_value, "title", $$v);
            },
            expression: "input_value.title"
          }
        }), _c('b-form-input', {
          attrs: {
            "placeholder": _vm.field.placeholder,
            "state": _vm.getValidationState(v),
            "name": _vm.field.name + 'url'
          },
          on: {
            "input": _vm.input
          },
          model: {
            value: _vm.input_value.uri,
            callback: function ($$v) {
              _vm.$set(_vm.input_value, "uri", $$v);
            },
            expression: "input_value.uri"
          }
        })], 1), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])];
      }
    }])
  })], 1);
};
var drupal_linkvue_type_template_id_e9f68b24_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue?vue&type=script&lang=js&




/* harmony default export */ var drupal_linkvue_type_script_lang_js_ = ({
  name: "drupal-link",
  props: {
    class_css: {
      type: [Array]
    },
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
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  data() {
    return {
      input_value: {
        title: "",
        uri: "#"
      },
      timer: null
    };
  },
  mounted() {
    this.input_value = this.getValue();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        var url = this.model[this.field.name][0];
        if (url.uri) {
          return {
            uri: url.uri.replace("internal:", ""),
            title: url.title,
            attributes: url.attributes,
            options: url.options
          };
        }
        return url;
      }
    },
    input() {
      const vals = [];
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const value = {
          uri: "internal:" + this.input_value.uri,
          title: this.input_value.title,
          attributes: [],
          options: []
        };
        vals.push(value);
        this.setValue(vals);
      }, 500);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_linkvue_type_script_lang_js_ = (drupal_linkvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue





/* normalize component */
;
var drupal_link_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_linkvue_type_script_lang_js_,
  drupal_linkvue_type_template_id_e9f68b24_render,
  drupal_linkvue_type_template_id_e9f68b24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_link = (drupal_link_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue?vue&type=template&id=382a3246&
var drupal_colorvue_type_template_id_382a3246_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('b-form-group', {
    attrs: {
      "label": _vm.field.label,
      "description": _vm.field.description
    }
  }, _vm._l(_vm.model[_vm.field.name], function (val, k) {
    return _c('div', {
      key: k,
      staticClass: "field-item-value"
    }, [_c('b-form-input', {
      attrs: {
        "placeholder": _vm.field.placeholder,
        "type": "color"
      },
      model: {
        value: val.color,
        callback: function ($$v) {
          _vm.$set(val, "color", $$v);
        },
        expression: "val.color"
      }
    })], 1);
  }), 0)], 1);
};
var drupal_colorvue_type_template_id_382a3246_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue?vue&type=script&lang=js&
/* harmony default export */ var drupal_colorvue_type_script_lang_js_ = ({
  name: "DrupalString",
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_colorvue_type_script_lang_js_ = (drupal_colorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue





/* normalize component */
;
var drupal_color_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_colorvue_type_script_lang_js_,
  drupal_colorvue_type_template_id_382a3246_render,
  drupal_colorvue_type_template_id_382a3246_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_color = (drupal_color_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=template&id=e2fd8bd0&scoped=true&
var drupal_booleanvue_type_template_id_e2fd8bd0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css,
    attrs: {
      "field": "drupal_boolean"
    }
  }, [_c('div', {
    staticClass: "field-item-value js-form-type-radio",
    attrs: {
      "format_val": _vm.format_val
    }
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "name": _vm.field.name
          }
        }, [_c('div', {
          staticClass: "fieldset-wrapper"
        }, [_vm.field.entity_form_settings && _vm.field.entity_form_settings.list_options ? _c('div', {
          staticClass: "radio"
        }, _vm._l(_vm.field.entity_form_settings.list_options, function (option, o) {
          return _c('b-form-radio', {
            key: o,
            staticClass: "form-check",
            attrs: {
              "name": _vm.field.name,
              "value": option.value,
              "state": _vm.getValidationState(v)
            },
            model: {
              value: _vm.selected,
              callback: function ($$v) {
                _vm.selected = $$v;
              },
              expression: "selected"
            }
          }, [_c('transition', {
            attrs: {
              "name": "fade",
              "mode": "out-in"
            }
          }, [_c('div', [option.image_url ? _c('b-img', {
            attrs: {
              "thumbnail": "",
              "fluid": "",
              "src": option.image_url,
              "alt": "Image 1"
            }
          }) : _vm._e(), !option.image_url ? _c('svgLoader') : _vm._e()], 1)]), _c('div', {
            staticClass: "mt-5"
          }, [_vm._v(_vm._s(option.label))]), option.description.value && option.description.value !== '' ? _c('div', {
            staticClass: "mt-5 text-hover",
            domProps: {
              "innerHTML": _vm._s(option.description.value)
            }
          }) : _vm._e()], 1);
        }), 1) : _vm._e(), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])])];
      }
    }])
  })], 1)]);
};
var drupal_booleanvue_type_template_id_e2fd8bd0_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue?vue&type=template&id=d69890ba&scoped=true&
var svg_preloadervue_type_template_id_d69890ba_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-svg"
  }, [_c('svg', {
    attrs: {
      "version": "1.1",
      "viewBox": "0 0 100 100",
      "preserveAspectRatio": "xMidYMid",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('g', [_c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip"
    }
  }, [_c('path', {
    attrs: {
      "d": "M 50 50 L 35 0 L 65 0 z"
    }
  })]), _c('ellipse', {
    staticStyle: {
      "fill": "none",
      "stroke": "#aaa"
    },
    attrs: {
      "id": "MyEllipse",
      "clip-path": "url(#clip)",
      "cx": "50",
      "cy": "50",
      "rx": "40",
      "ry": "40",
      "stroke-width": "10"
    }
  })]), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(40 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(80 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(120 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(160 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(200 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(240 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(280 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(320 50 50)"
    }
  }), _c('ellipse', {
    staticStyle: {
      "fill": "none",
      "stroke": "black"
    },
    attrs: {
      "clip-path": "url(#clip)",
      "cx": "50",
      "cy": "50",
      "rx": "40",
      "ry": "40",
      "stroke-width": "12"
    }
  }, [_c('animateTransform', {
    attrs: {
      "attributeName": "transform",
      "attributeType": "XML",
      "type": "rotate",
      "values": "0 50 50; 40 50 50; 80 50 50; 120 50 50;\n        160 50 50; 200 50 50; 240 50 50; 280 50 50; 320 50 50; 360 50 50",
      "dur": "2s",
      "repeatCount": "indefinite",
      "additive": "replace",
      "calcMode": "linear",
      "fill": "freeze"
    }
  })], 1)])])]);
};
var svg_preloadervue_type_template_id_d69890ba_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue?vue&type=style&index=0&id=d69890ba&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue?vue&type=style&index=0&id=d69890ba&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue

var script = {}
;


/* normalize component */

var svg_preloader_component = (0,componentNormalizer/* default */.Z)(
  script,
  svg_preloadervue_type_template_id_d69890ba_scoped_true_render,
  svg_preloadervue_type_template_id_d69890ba_scoped_true_staticRenderFns,
  false,
  null,
  "d69890ba",
  null
  
)

/* harmony default export */ var svg_preloader = (svg_preloader_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=script&lang=js&





/* harmony default export */ var drupal_booleanvue_type_script_lang_js_ = ({
  name: "DrupalBoolean",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    svgLoader: svg_preloader
  },
  props: {
    class_css: {
      type: [Array]
    },
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
      selected: this.model[this.field.name] && this.model[this.field.name][0] ? this.model[this.field.name][0].value : null
    };
  },
  computed: {
    format_val() {
      const vals = [];
      if (this.selected !== null) {
        vals.push({
          value: this.selected
        });
      }
      this.setValue(vals);
      return vals;
    },
    fieldName() {
      return this.field.name;
    }
  },
  watch: {
    /**
     * Lorsque le composant est chargé plusieurs durant le processus, on est obligé de forcer la MAJ des images si le nom change.
     * ( Idealement on devrait charger des instances du champs pour un espace bien donnée ).
     */
    fieldName() {
      this.getImage();
    }
  },
  mounted() {
    this.getImage();
    console.log("load image boolean");
  },
  methods: {
    getImage() {
      if (this.field.entity_form_settings && this.field.entity_form_settings.list_options) this.field.entity_form_settings.list_options.forEach(option => {
        if (!option.image_url) this.$set(option, "image_url", "");
        if (option.image[0] && option.image_url == "") {
          loadField.getImageUrl(option.image[0]).then(resp => {
            option.image_url = resp.data;
          });
        }
      });
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_booleanvue_type_script_lang_js_ = (drupal_booleanvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=style&index=0&id=e2fd8bd0&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=style&index=0&id=e2fd8bd0&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue



;


/* normalize component */

var drupal_boolean_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_booleanvue_type_script_lang_js_,
  drupal_booleanvue_type_template_id_e2fd8bd0_scoped_true_render,
  drupal_booleanvue_type_template_id_e2fd8bd0_scoped_true_staticRenderFns,
  false,
  null,
  "e2fd8bd0",
  null
  
)

/* harmony default export */ var drupal_boolean = (drupal_boolean_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=template&id=776a4b88&scoped=true&
var drupal_list_stringvue_type_template_id_776a4b88_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css
  }, [_c('div', {
    staticClass: "field-item-value js-form-type-checkbox"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label
          }
        }, [_c('div', {
          staticClass: "fieldset-wrapper"
        }, [_c('div', {
          staticClass: "checkbox"
        }, [_c('b-form-checkbox-group', {
          on: {
            "input": _vm.setValue
          },
          model: {
            value: _vm.selected,
            callback: function ($$v) {
              _vm.selected = $$v;
            },
            expression: "selected"
          }
        }, _vm._l(_vm.field.entity_form_settings.list_options, function (option, o) {
          return _c('b-form-checkbox', {
            key: o,
            staticClass: "form-check",
            attrs: {
              "value": option.value
            }
          }, [_c('transition', {
            attrs: {
              "name": "fade",
              "mode": "out-in"
            }
          }, [_c('div', [option.image_url ? _c('b-img', {
            attrs: {
              "thumbnail": "",
              "fluid": "",
              "src": option.image_url,
              "alt": "Image 1"
            }
          }) : _vm._e(), !option.image_url ? _c('svgLoader') : _vm._e()], 1)]), _c('div', {
            staticClass: "mt-5"
          }, [_vm._v(_vm._s(option.label))]), option.description.value && option.description.value !== '' ? _c('div', {
            staticClass: "mt-5 text-hover",
            domProps: {
              "innerHTML": _vm._s(option.description.value)
            }
          }) : _vm._e()], 1);
        }), 1)], 1), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])])];
      }
    }])
  })], 1)]);
};
var drupal_list_stringvue_type_template_id_776a4b88_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=script&lang=js&





/* harmony default export */ var drupal_list_stringvue_type_script_lang_js_ = ({
  name: "DrupalListString",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    svgLoader: svg_preloader
  },
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: []
    };
  },
  mounted() {
    this.getValue();
    // Lorsque le composant s'initialise on charge les images.
    this.getImage();
  },
  // watch: {
  //   /**
  //    * Lorsque le composant est chargé plusieurs durant le processus, on est obligé de forcer la MAJ des images si le nom change.
  //    * ( Idealement on devrait charger des instances du champs pour un espace bien donnée ).
  //    */
  //   fieldName() {
  //     this.getImage();
  //   },
  // },

  methods: {
    /**
     * --
     */
    getImage() {
      this.field.entity_form_settings.list_options.forEach(option => {
        if (!option.image_url) this.$set(option, "image_url", "");
        if (option.image && option.image[0] && option.image_url == "") {
          loadField.getImageUrl(option.image[0]).then(resp => {
            option.image_url = resp.data;
          });
        }
      });
    },
    /**
     *
     * @param {--} vals
     */
    setValue(e) {
      const vals = [];
      e.forEach(item => {
        vals.push({
          value: item
        });
      });
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    /**
     * --
     */
    getRules() {
      return loadField.getRules(this.field);
    },
    /**
     * --
     */
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name].length) {
        this.model[this.field.name].forEach(item => {
          this.selected.push(item.value);
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_list_stringvue_type_script_lang_js_ = (drupal_list_stringvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=style&index=0&id=776a4b88&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=style&index=0&id=776a4b88&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue



;


/* normalize component */

var drupal_list_string_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_list_stringvue_type_script_lang_js_,
  drupal_list_stringvue_type_template_id_776a4b88_scoped_true_render,
  drupal_list_stringvue_type_template_id_776a4b88_scoped_true_staticRenderFns,
  false,
  null,
  "776a4b88",
  null
  
)

/* harmony default export */ var drupal_list_string = (drupal_list_string_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue?vue&type=template&id=e5aa6300&
var textarea_ckeditorvue_type_template_id_e5aa6300_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-4",
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    staticClass: "form-group",
    attrs: {
      "name": _vm.field.label,
      "rules": {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('legend', {
          domProps: {
            "innerHTML": _vm._s(_vm.field.label)
          }
        }), _c('ckeditor', {
          attrs: {
            "config": _vm.editorConfig
          },
          on: {
            "input": _vm.input,
            "namespaceloaded": _vm.onNamespaceLoaded
          },
          model: {
            value: _vm.editorData,
            callback: function ($$v) {
              _vm.editorData = $$v;
            },
            expression: "editorData"
          }
        }), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()];
      }
    }])
  })], 1);
};
var textarea_ckeditorvue_type_template_id_e5aa6300_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue?vue&type=script&lang=js&




/* harmony default export */ var textarea_ckeditorvue_type_script_lang_js_ = ({
  name: "TextareaCkeditor",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
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
      editorData: "",
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        toolbar: [{
          name: "document",
          items: ["Bold", "Italic", "-", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }],
        contentsCss: "@import '" + loadField.config.getBaseUrl() + "/themes/contrib/wb_universe/node_modules/%40fortawesome/fontawesome-free/css/all.min.css'; @import 'http://wb-horizon.com/themes/custom/wb_horizon_com/css/vendor-style.css';",
        on: {
          instanceReady: function (ev) {
            ev.sender.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            ev.sender.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("div", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: true,
              breakBeforeClose: true,
              breakAfterClose: false
            });
          }
        }
      }
    };
  },
  computed: {
    editorConfig() {
      var extraPlugins = "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";
      return {
        extraPlugins: extraPlugins,
        ...this.preEditorConfig
      };
    }
  },
  mounted() {
    this.editorData = this.getValue();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      }
    },
    input(v) {
      const vals = [];
      vals.push({
        value: v,
        format: "full_html"
      });
      this.setValue(vals);
    },
    onNamespaceLoaded(CKEDITOR) {
      CKEDITOR.config.allowedContent = true;
      // CKEDITOR.config.contentsCss =
      //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      // CKEDITOR.config.entities_processNumerical = 'force';
      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_textarea_ckeditorvue_type_script_lang_js_ = (textarea_ckeditorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue





/* normalize component */
;
var textarea_ckeditor_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_textarea_ckeditorvue_type_script_lang_js_,
  textarea_ckeditorvue_type_template_id_e5aa6300_render,
  textarea_ckeditorvue_type_template_id_e5aa6300_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var textarea_ckeditor = (textarea_ckeditor_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue?vue&type=template&id=0cdc6caa&
var html_rendervue_type_template_id_0cdc6caa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.field.content)
    }
  })]);
};
var html_rendervue_type_template_id_0cdc6caa_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue?vue&type=script&lang=js&
/* harmony default export */ var html_rendervue_type_script_lang_js_ = ({
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_html_rendervue_type_script_lang_js_ = (html_rendervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue





/* normalize component */
;
var html_render_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_html_rendervue_type_script_lang_js_,
  html_rendervue_type_template_id_0cdc6caa_render,
  html_rendervue_type_template_id_0cdc6caa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var html_render = (html_render_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue?vue&type=template&id=2ad767c6&
var drupal_filevue_type_template_id_2ad767c6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vuejs-uploader",
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('b-form-file', {
          attrs: {
            "placeholder": "Ajouter un fichier ...",
            "drop-placeholder": "Drop file here...",
            "multiple": _vm.cardinality,
            "accept": ".jpg, .png, .gif, webp",
            "size": "sm",
            "state": _vm.getValidationState(v)
          },
          on: {
            "input": _vm.previewImage
          },
          model: {
            value: _vm.files,
            callback: function ($$v) {
              _vm.files = $$v;
            },
            expression: "files"
          }
        })], 1)];
      }
    }])
  }), _c('div', {
    staticClass: "previews"
  }, _vm._l(_vm.toUplode, function (fil, i) {
    return _c('div', {
      key: i
    }, [_c('b-img', {
      staticClass: "img-preview",
      attrs: {
        "src": fil.url,
        "fluid": "",
        "alt": "Fluid image",
        "thumbnail": ""
      }
    })], 1);
  }), 0)], 1);
};
var drupal_filevue_type_template_id_2ad767c6_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue?vue&type=script&lang=js&





/* harmony default export */ var drupal_filevue_type_script_lang_js_ = ({
  name: "UploaderFile",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
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
      // Fichiers provenant de l'action utilisateur.
      files: [],
      // Fichiers pour la preview.
      urls: [],
      // Fichiers qui doivent etre uploader
      toUplode: []
    };
  },
  computed: {
    cardinality() {
      if (this.field.cardinality === -1) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.getValue();
  },
  methods: {
    /**
     *
     * @param {*} param0
     */
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    /**
     *
     */
    getRules() {
      return loadField.getRules(this.field);
    },
    /**
     *
     * @param {*} files
     */
    previewImage(files) {
      // preview
      var reader = new FileReader();
      if (this.cardinality) {
        for (const i in files) {
          const file = files[i];
          // Send images.
          loadField.config.postFile("/filesmanager/post", file).then(resp => {
            reader.onload = read => {
              this.toUplode.push({
                file: file,
                status: resp,
                error: 0,
                url: read.target.result
              });
            };
            reader.readAsDataURL(file);
          });
        }
      } else {
        const vals = [];
        this.toUplode = [];
        loadField.config.postFile("/filesmanager/post", files).then(resp => {
          if (this.namespaceStore) this.$store.commit(this.namespaceStore + "/ACTIVE_RUNNING");else this.$store.commit("ACTIVE_RUNNING");
          reader.onload = read => {
            this.toUplode.push({
              file: files,
              status: resp,
              error: 0,
              url: read.target.result
            });
            setTimeout(() => {
              if (this.namespaceStore) this.$store.commit(this.namespaceStore + "/DISABLE_RUNNING");else this.$store.commit("DISABLE_RUNNING");
            }, 300);
          };
          reader.readAsDataURL(files);
          vals.push({
            target_id: resp.id
          });
          this.setValue(vals);
        });
      }
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name].length) {
        this.toUplode = [];
        this.model[this.field.name].forEach(item => {
          if (loadField.config) loadField.getImageUrl(item.target_id).then(resp => {
            this.toUplode.push({
              url: resp.data
            });
          });
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_filevue_type_script_lang_js_ = (drupal_filevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue





/* normalize component */
;
var drupal_file_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_filevue_type_script_lang_js_,
  drupal_filevue_type_template_id_2ad767c6_render,
  drupal_filevue_type_template_id_2ad767c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_file = (drupal_file_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=template&id=087ccdc9&scoped=true&
var ExperienceTypevue_type_template_id_087ccdc9_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "complexe_field",
    class: _vm.classCss
  }, [_c('h4', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.field.label))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "pb-3 field-mutiple",
    attrs: {
      "id": _vm.idHtml
    }
  }, _vm._l(_vm.model[_vm.field.name], function (val, k) {
    return _c('div', {
      key: k,
      staticClass: "field-item-value mb-4"
    }, [_c('div', {
      staticClass: "bg-light p-4 px-5"
    }, [_c('div', {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c('div', {
      staticClass: "text"
    }, [_c('div', {
      staticClass: "font-weight-bold"
    }, [_vm._v(_vm._s(val.value))]), _c('div', {
      staticClass: "d-flex"
    }, [_c('span', [_vm._v(_vm._s(val.company))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(val.date_debut))])])]), _c('div', {
      staticClass: "icon-buttons"
    }, [_c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-5",
      attrs: {
        "variant": "light",
        "title": "Editer"
      },
      on: {
        "click": function ($event) {
          return _vm.Edit(val);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "pencil-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action btn-drag-drop mr-5",
      attrs: {
        "variant": "light",
        "title": "Glisser-déposer"
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "arrows-move",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-4",
      attrs: {
        "variant": "light",
        "title": "Supprimer"
      },
      on: {
        "click": function ($event) {
          return _vm.removeField(k);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "trash-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1)])])])]);
  }), 0), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "add-new-card",
    on: {
      "click": _vm.add
    }
  }, [_c('div', {
    staticClass: "anc-content d-flex align-items-center"
  }, [_c('b-icon', {
    staticClass: "text-info",
    attrs: {
      "icon": "plus-circle-fill",
      "font-scale": "1.5"
    }
  }), _c('h4', {
    staticClass: "anc-titre"
  }, [_vm._v(_vm._s(_vm.addButtonTitle))])], 1)]), _vm.showFormEdit ? _c('EditExperienceType', {
    attrs: {
      "f-value": _vm.currentEditValue,
      "field": _vm.field
    },
    on: {
      "closeEditForm": _vm.closeEditForm
    }
  }) : _vm._e()], 1);
};
var ExperienceTypevue_type_template_id_087ccdc9_scoped_true_staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/sortablejs/modular/sortable.esm.js
var sortable_esm = __webpack_require__(9482);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue?vue&type=template&id=33acc6d0&
var EditExperienceTypevue_type_template_id_33acc6d0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "p-3 py-5",
    on: {
      "click": function ($event) {
        return _vm.$emit('closeEditForm');
      }
    }
  }, [_c('span', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        "hover": true
      }
    }],
    staticClass: "btn-action btn-back",
    attrs: {
      "variant": "light",
      "title": "Back"
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "arrow-left",
      "variant": "secondary",
      "font-scale": "1"
    }
  }), _vm._v(" Retour ")], 1)]), _c('div', {
    staticClass: "add-item-form"
  }, [_c('b-form', [_c('b-row', {
    staticClass: ""
  }, [_c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-titre"
    }
  }, [_vm._v(_vm._s(_vm.settings.label_value))]), _c('b-form-input', {
    attrs: {
      "id": "input-titre",
      "type": "text",
      "placeholder": "Titre",
      "required": ""
    },
    model: {
      value: _vm.form.value,
      callback: function ($$v) {
        _vm.$set(_vm.form, "value", $$v);
      },
      expression: "form.value"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Vendeur de cercueil ")])], 1)]), _c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-compaign"
    }
  }, [_vm._v(_vm._s(_vm.settings.label_company))]), _c('b-form-input', {
    attrs: {
      "id": "input-compaign",
      "type": "text",
      "placeholder": "la compagnie",
      "required": ""
    },
    model: {
      value: _vm.form.company,
      callback: function ($$v) {
        _vm.$set(_vm.form, "company", $$v);
      },
      expression: "form.company"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Luis Vuitton")])], 1)]), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-location"
    }
  }, [_vm._v(_vm._s(_vm.settings.label_address))]), _c('b-form-input', {
    attrs: {
      "id": "input-location",
      "type": "text",
      "placeholder": "Tokyo, Lagos",
      "required": ""
    },
    model: {
      value: _vm.form.address,
      callback: function ($$v) {
        _vm.$set(_vm.form, "address", $$v);
      },
      expression: "form.address"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Lagos ")])], 1)])], 1), _c('b-row', {
    staticClass: ""
  }, [_c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-date-debut"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_date_debut) + " ")]), _c('b-form-datepicker', {
    attrs: {
      "id": "input-date-debut",
      "type": "text",
      "placeholder": "Date de début",
      "required": "",
      "locale": "fr",
      "date-format-options": {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }
    },
    model: {
      value: _vm.date_debut,
      callback: function ($$v) {
        _vm.date_debut = $$v;
      },
      expression: "date_debut"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. 22 Juin")])], 1)]), _c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-date-fin"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_date_fin) + " ")]), _c('b-form-datepicker', {
    attrs: {
      "id": "input-date-fin",
      "type": "text",
      "placeholder": "Date de fin",
      "required": "",
      "locale": "fr",
      "date-format-options": {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }
    },
    model: {
      value: _vm.date_fin,
      callback: function ($$v) {
        _vm.date_fin = $$v;
      },
      expression: "date_fin"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. 22 Dec ")]), _c('b-form-checkbox', {
    staticClass: "mt-3 ml-2",
    attrs: {
      "required": ""
    },
    model: {
      value: _vm.form.en_poste,
      callback: function ($$v) {
        _vm.$set(_vm.form, "en_poste", $$v);
      },
      expression: "form.en_poste"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_en_poste) + " ")])], 1)])], 1), _c('b-row', {
    staticClass: ""
  }, [_c('b-col', [_c('div', {
    staticClass: "fi-input fi-input--textarea"
  }, [_c('label', {
    staticClass: "label-respon",
    attrs: {
      "for": "input-textarea-role"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_description) + " ")]), _c('ckeditor', {
    attrs: {
      "config": _vm.editorConfig
    },
    on: {
      "input": _vm.input,
      "namespaceloaded": _vm.onNamespaceLoaded
    },
    model: {
      value: _vm.form.description,
      callback: function ($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Organisation d'événements VIP et prise en charge de clients exclusifs. ")])], 1)])], 1)], 1)], 1)]);
};
var EditExperienceTypevue_type_template_id_33acc6d0_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue?vue&type=script&lang=js&

class CreateInstance {
  constructor(value) {
    this.name = value;
  }
  getValue() {
    return this.name;
  }
}
/* harmony default export */ var EditExperienceTypevue_type_script_lang_js_ = ({
  name: "FormInput",
  components: {},
  props: {
    fValue: {
      type: Object,
      require: true,
      default: function () {
        return {};
      }
    },
    field: {
      type: Object,
      require: true,
      default: function () {
        return {};
      }
    }
  },
  data() {
    return {
      form: {},
      editorData: "",
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        toolbar: [{
          name: "document",
          items: ["Bold", "Italic", "-", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }],
        contentsCss: "@import '" + loadField.config.getBaseUrl() + "/themes/contrib/wb_universe/node_modules/%40fortawesome/fontawesome-free/css/all.min.css'; @import 'http://wb-horizon.com/themes/custom/wb_horizon_com/css/vendor-style.css';",
        on: {
          instanceReady: function (ev) {
            ev.sender.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            ev.sender.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("div", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: true,
              breakBeforeClose: true,
              breakAfterClose: false
            });
          }
        }
      }
    };
  },
  computed: {
    settings() {
      if (this.field.entity_form) return this.field.entity_form.settings;else return {};
    },
    editorConfig() {
      //,ckawesome, ckeditorfa
      var extraPlugins = "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";
      return {
        extraPlugins: extraPlugins,
        ...this.preEditorConfig
      };
    },
    date_debut: {
      get() {
        if (this.form.date_debut) {
          const date = new Date(this.form.date_debut * 1000);
          let month = parseInt(date.getMonth()) + 1;
          return date.getFullYear() + "-" + month + "-" + date.getDate();
        } else return "";
      },
      set(val) {
        if (val) {
          const date = new Date(val);
          this.form.date_debut = Math.floor(date.getTime() / 1000);
        }
      }
    },
    date_fin: {
      get() {
        if (this.form.date_fin) {
          const date = new Date(this.form.date_fin * 1000);
          let month = parseInt(date.getMonth()) + 1;
          return date.getFullYear() + "-" + month + "-" + date.getDate();
        } else return "";
      },
      set(val) {
        console.log(" date_fin : ", val);
        if (val) {
          const date = new Date(val);
          this.form.date_fin = Math.floor(date.getTime() / 1000);
        }
      }
    }
  },
  mounted() {
    const v = new CreateInstance(this.fValue);
    this.form = v.getValue();
  },
  methods: {
    input(v) {
      // const vals = [];
      // vals.push({ value: v, format: "full_html" });
      // this.setValue(vals);
      this.form.description = v;
    },
    onNamespaceLoaded(CKEDITOR) {
      CKEDITOR.config.allowedContent = true;
      // CKEDITOR.config.contentsCss =
      //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      // CKEDITOR.config.entities_processNumerical = 'force';
      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_EditExperienceTypevue_type_script_lang_js_ = (EditExperienceTypevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue





/* normalize component */
;
var EditExperienceType_component = (0,componentNormalizer/* default */.Z)(
  Ressouces_EditExperienceTypevue_type_script_lang_js_,
  EditExperienceTypevue_type_template_id_33acc6d0_render,
  EditExperienceTypevue_type_template_id_33acc6d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditExperienceType = (EditExperienceType_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=script&lang=js&



const defaultValue = () => {
  return {
    value: "Developpeur web",
    company: "Nutibe",
    address: "",
    date_debut: "",
    date_fin: "",
    description: "s",
    format: null
  };
};
/* harmony default export */ var ExperienceTypevue_type_script_lang_js_ = ({
  name: "ExperienceType",
  components: {
    EditExperienceType: EditExperienceType
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    addButtonTitle: {
      type: String,
      default: "Ajouter"
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    }
  },
  data() {
    return {
      idHtml: "sort-" + Math.random().toString(36),
      currentEditValue: {},
      showFormEdit: false
    };
  },
  mounted() {
    var el = document.getElementById(this.idHtml);
    sortable_esm/* default.create */.ZP.create(el, {
      animation: 150,
      handle: ".btn-drag-drop",
      ghostClass: "blue-background-class"
    });
  },
  methods: {
    input(v) {
      const vals = [];
      vals.push({
        value: v
      });
      // this.setValue(vals);
    },

    //
    add() {
      this.$emit("addNewValue", defaultValue());
    },
    //
    removeField(index) {
      console.log("removeField in fields : ", index);
      this.$emit("removeField", index);
    },
    Edit(value) {
      this.currentEditValue = value;
      this.showFormEdit = true;
    },
    closeEditForm() {
      this.showFormEdit = false;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_ExperienceTypevue_type_script_lang_js_ = (ExperienceTypevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=style&index=0&id=087ccdc9&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=style&index=0&id=087ccdc9&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue



;


/* normalize component */

var ExperienceType_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_ExperienceTypevue_type_script_lang_js_,
  ExperienceTypevue_type_template_id_087ccdc9_scoped_true_render,
  ExperienceTypevue_type_template_id_087ccdc9_scoped_true_staticRenderFns,
  false,
  null,
  "087ccdc9",
  null
  
)

/* harmony default export */ var ExperienceType = (ExperienceType_component.exports);
// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__(4353);
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue?vue&type=template&id=90dd4c54&
var MultiSelectvue_type_template_id_90dd4c54_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('div', {
          staticClass: "autocomplete"
        }, [_c('multiselect', {
          attrs: {
            "options": _vm.options,
            "custom-label": _vm.nameWithLang,
            "placeholder": "",
            "label": "text",
            "track-by": "text",
            "show-no-results": false,
            "showLabels": false,
            "loading": _vm.isLoading
          },
          on: {
            "search-change": _vm.asyncFind,
            "select": _vm.selectUser
          },
          model: {
            value: _vm.model.value,
            callback: function ($$v) {
              _vm.$set(_vm.model, "value", $$v);
            },
            expression: "model.value"
          }
        }, [_c('template', {
          slot: "noResult"
        }, [_c('span', {
          staticClass: "option__titl d-none"
        }, [_vm._v(" Aucun contenu ")])]), _c('template', {
          slot: "placeholder"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Le terme n'existe pas ")])]), _c('template', {
          slot: "noOptions"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Saisir un terme ")])])], 2), _c('div', {
          staticClass: "text-danger"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)], 1)])];
      }
    }])
  })], 1);
};
var MultiSelectvue_type_template_id_90dd4c54_staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__(8627);
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);
// EXTERNAL MODULE: ../wbuutilities/index.js + 71 modules
var wbuutilities = __webpack_require__(6540);
;// CONCATENATED MODULE: ../drupal-vuejs/src/config.js

const config = {
  ...wbuutilities/* AjaxBasic */.EC,
  /**
   * Retoune un entier arleatoire entre [99-999]
   */
  getRandomIntInclusive(min = 99, max = 999) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
/* harmony default export */ var src_config = (config);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/session.js

/* harmony default export */ var session = ({
  ...src_config,
  url_session: "/session/token",
  token: null,
  /**
   * Permet d'obtenir la session de token.
   * La session de tokens ne change pas durant une session.
   * il serait peut etre preferable de demander qu'il expire apres un certains temps. ( https://www.drupal.org/project/marketing_cloud/issues/3195685 )
   */
  getToken() {
    return new Promise(resolv => {
      if (this.token) resolv(this.token);
      this.get(this.url_session).then(resp => {
        this.token = resp.data;
        resolv(resp.data);
      });
    });
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/utilities.js


const utilities = {
  ...session,
  ...src_config,
  /**
   * configCustom[{name:"",value:""}]
   */
  async dPost(url, datas, configCustom = null) {
    const Token = await this.getToken();
    var configs = {
      "X-CSRF-Token": Token,
      "Content-Type": "application/json"
    };
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.post(url, datas, {
      headers: configs
    });
  },
  /**
   * Get datas;
   */
  async dGet(url, configCustom = null) {
    const Token = await this.getToken();
    var configs = {
      "X-CSRF-Token": Token,
      "Content-Type": "application/json"
    };
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.get(url, {
      headers: configs
    });
  },
  /**
   *
   */
  mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (const i in configCustom) {
        configs[i] = configCustom[i];
      }
    }
    return configs;
  }
};
/* harmony default export */ var App_utilities = (utilities);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/Confs.js
/* harmony default export */ var Confs = ({
  baseURl: "/jsonapi",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/buildFilter.js

class filters {
  constructor(query = "") {
    this.query = query;
    //
  }

  addFilter(fieldName, operator, value) {
    var key = "fil-" + src_config.getRandomIntInclusive();
    this.addParam(key, "path", fieldName);
    this.addParam(key, "operator", operator);
    this.addParam(key, "value", value);
    return this.query;
  }
  addParam(key, action, value) {
    if (this.query && this.query !== "") {
      this.query += "&";
    }
    this.query += `filter[${key}][condition][${action}]=${value}`;
  }
}
/* harmony default export */ var buildFilter = (filters);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/termsTaxo.js




class termsTaxo {
  constructor(vid) {
    this.vid = vid;
    //
    this.url = Confs.baseURl + "/taxonomy_term/" + this.vid;
    this.terms = [];
  }
  /**
   * Recupere les terms
   */
  get() {
    return new Promise(resolv => {
      App_utilities.get(this.url, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Recupere les terms
   */
  getSearch(search) {
    const filter = new buildFilter();
    filter.addFilter("name", "CONTAINS", search);
    return new Promise(resolv => {
      App_utilities.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValue(term) {
    const filter = new buildFilter();
    filter.addFilter("name", "=", term);
    return new Promise(resolv => {
      App_utilities.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValueByTid(id) {
    const filter = new buildFilter();
    filter.addFilter("tid", "=", id);
    return new Promise((resolv, reject) => {
      App_utilities.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
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
    const filter = new buildFilter();
    filter.addFilter("id", "=", id);
    return new Promise(resolv => {
      App_utilities.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Retourne les termes sous formes de liste d'otpions.
   */
  getOptions() {
    const options = [];
    for (const i in this.terms.data) {
      const term = this.terms.data[i];
      options.push({
        text: term.attributes.name,
        value: term.attributes.drupal_internal__tid
      });
    }
    return options;
  }
}
/* harmony default export */ var jsonApi_termsTaxo = (termsTaxo);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/users/user.js

/* harmony default export */ var user = ({
  ...App_utilities,
  getCurrentUser() {
    return new Promise(resolv => {
      this.get("/login-rx-vuejs/current-user").then(resp => {
        resolv(resp.data);
      });
    });
  },
  getUser(uid) {
    return new Promise(resolv => {
      this.get("/user/" + uid + "?_format=json").then(resp => {
        resolv(resp.data);
      });
    });
  },
  /**
   * Utilise le module login-vuejs
   * values ={
        name: [{ value: user }],
        password: [{ value: pass }],
      }
   * @param {*} values 
   * @returns 
   */
  loginRxVuejs(values) {
    if (values.name && values.name[0] && values.password && values.password[0]) {
      return this.post("/login-rx-vuejs/user-connexion", values);
    }
    throw "Format de connexion non valide";
  },
  /**
   * Semble fonctionner par defaut.
   * values ={
   *     name: '',
   *     pass: '',
   * }
   * @param {*} values
   * @returns
   */
  login(values) {
    return new Promise((resolv, reject) => {
      if (values.name && values.pass) {
        this.post("/user/login?_format=json", values).then(resp => {
          this.getToken().then(r => {
            this.testAuthentificaton();
            resolv({
              user: resp,
              token: r
            });
          }).catch(error => reject(error));
        }).catch(error => reject(error));
      } else throw "Format de connexion non valide";
    });
  },
  testAuthentificaton() {
    this.dGet("/gestion-project-v2/test");
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(2801);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/BasicAuthentification/user.js

/**
 * Ce fichier a pour role de gerer laa connexion des utilisateur.
 * Logique :
 * 1 : les paramettres de connexion sont verfiées.
 * 2 : Si ok, on sauvegarde dans local storage.
 * 3 : on initialise la
 */
const keyCren = "drupal-vuejs-credential";
const valCren = "drupal-vuejs-cre-val";
/* harmony default export */ var BasicAuthentification_user = ({
  ...wbuutilities/* AjaxBasic */.EC,
  /**
   * ( Semble fonctionner au niveau drupal sans necessite de module ).
   * values = {
   *     name: '',
   *     pass: '',
   * }
   * @param {*} values
   * @returns
   */
  login(values) {
    return new Promise((resolv, reject) => {
      if (values.name && values.pass) {
        this.post("/user/login?_format=json", values).then(resp => {
          this.saveTempCredential(values, resp.data);
          resolv(resp);
        }).catch(error => reject(error));
      } else throw "Format de connexion non valide";
    });
  },
  /**
   * On sauvegarde de maniere temporaire les identifications de connexion.
   */
  saveTempCredential(values, resp) {
    localStorage.setItem(keyCren, JSON.stringify(values));
    localStorage.setItem(valCren, JSON.stringify(resp));
  },
  loadCredential() {
    const cre = localStorage.getItem(keyCren);
    if (cre) {
      return JSON.parse(cre);
    } else false;
  },
  deleteConnexion() {
    localStorage.removeItem(keyCren);
  },
  checkCurrentUserIsLogin() {
    const cre = localStorage.getItem(valCren);
    const cre1 = localStorage.getItem(keyCren);
    if (cre && cre1) {
      return JSON.parse(cre);
    } else false;
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/drupal-utilities.js
/* harmony default export */ var drupal_utilities = ({
  stringLength: 19,
  /**
   * Permet de convertir les strings en snake_case utilisable par les id de drupal.
   * @param {*} string
   * @returns
   */
  snakeCase(string) {
    return string.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join("_");
  },
  /**
   * Permet de generer un identifiant valide pour le creation de type d'entité
   */
  generateIdEntityType(string) {
    let idString = this.snakeCase(string).substring(0, this.stringLength);
    const start = new Date();
    idString += "_";
    idString += start.getFullYear();
    idString += "_";
    idString += start.getMonth();
    idString += "_";
    idString += Math.floor(Math.random() * 999);
    return idString;
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/BasicAuthentification/RequestBasicAuthen.js




var formatBasicAuth = function (userName, password) {
  var basicAuthCredential = userName + ":" + password;
  var bace64 = btoa(basicAuthCredential);
  return "Basic " + bace64;
};
/* harmony default export */ var RequestBasicAuthen = ({
  ...wbuutilities/* AjaxToastBootStrap */.Ht,
  ...BasicAuthentification_user,
  ...drupal_utilities,
  /**
   * Get datas;
   */
  async dGet(url, configCustom = null, showNotification = false) {
    const userLogin = this.loadCredential();
    var configs = {
      "Content-Type": "application/json"
    };
    if (userLogin) {
      configs["Authorization"] = formatBasicAuth(userLogin.name, userLogin.pass);
    }
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.bGet(url, {
      headers: configs
    }, showNotification);
  },
  async dPost(url, datas, configCustom = null, showNotification = true) {
    const userLogin = this.loadCredential();
    var configs = {
      "Content-Type": "application/json"
    };
    if (userLogin) {
      configs["Authorization"] = formatBasicAuth(userLogin.name, userLogin.pass);
    }
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.bPost(url, datas, {
      headers: configs
    }, showNotification);
  },
  /**
   *
   */
  mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (const i in configCustom) {
        configs[i] = configCustom[i];
      }
    }
    return configs;
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/InputBootstrap.js

/* harmony default export */ var InputBootstrap = ({
  modelsFields: {},
  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string(h, field, defaultValue = []) {
    if (defaultValue.length === 0) {
      defaultValue.push({
        value: ""
      });
    }
    const inputs = [];
    // Ajout du label
    inputs.push(h("label", {
      class: ["d-block", "content-center__title"]
    }, [field.label_value]));
    defaultValue.forEach(el => {
      inputs.push(h("input", {
        props: {
          type: "text",
          value: el.value,
          b_input: {
            type: Object,
            required: true
          }
        },
        on: {
          input: function (e) {
            if (e.target && e.target.value) el.value = e.target.value;
          }
        },
        class: ["form-control"]
      }));
    });
    // ajout de la description
    inputs.push(h("small", {
      class: ["text-muted"]
    }, [field.description]));
    const formG = h("div", {
      props: {},
      class: ["form-group", "content-center__input"]
    }, inputs);
    return formG;
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/formatFieldsBootstrap.js



/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */
class formatField {
  constructor(entity, bundle) {
    this.entity = entity;
    this.bundle = bundle;
    // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */
  async format() {
    var fields = await this.getFields();
    return new Promise((resolv, reject) => {
      if (fields.data && fields.data.fields) {
        InputBootstrap.modelsFields = this.buildModel(fields.data.fields);
        const formatFields = [];
        for (const i in fields.data.fields) {
          formatFields.push({
            ref: i,
            props: {
              name: {
                type: String,
                default: fields.data.fields[i].name
              }
            },
            render(createElement) {
              var renderField = [];
              switch (fields.data.fields[i].type) {
                case "string":
                  renderField.push(InputBootstrap.string(createElement, fields.data.fields[i], InputBootstrap.modelsFields[i]));
                  break;
              }
              return createElement("div", renderField);
            }
          });
        }
        resolv({
          templates: formatFields,
          models: InputBootstrap.modelsFields
        });
      } else {
        reject("Aucune donnée disponible");
      }
    });
  }

  /**
   * Get fileds in drupal.
   * @returns
   */
  getFields() {
    var url = "/api/form-node/generate-form";
    if (this.entity === "user") {
      url = "/api/form-node/generate-user";
    }
    url += "/" + this.bundle;
    return App_utilities.get(url);
  }
  /**
   * - Cet object permet de rendre les elements de l'object ecoutable.
   *   on creer tous les champs, puis on initialise InputBootstrap.modelsFields avec tous les champs.
   *   De cette facon vuejs peut ecouter les MAJ de champs.
   */
  buildModel(fields) {
    const models = {};
    for (const i in fields) {
      if (fields[i].type) models[i] = [];
    }
    return models;
  }
}
/* harmony default export */ var formatFieldsBootstrap = (formatField);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/facebook.js
//const FB = window.Fb;
/* harmony default export */ var facebook = ({
  user: {},
  FB: null,
  appId: "",
  scope: "public_profile, email",
  version: "v11.0",
  /**
   * Ouverture de la boite de dislogue, facebook.
   */
  openPopup() {
    var self = this;
    window.FB.login(resp => {
      this.statusChangeCallback(resp, true);
    }, {
      scope: self.scope,
      return_scopes: true
    });
  },
  logOut() {
    window.FB.logout(function (res) {
      this.onLogOut(res);
    });
  },
  onLogOut(resp) {
    console.log("Déconnetion réussi", resp);
  },
  /**
   * Permet de definir les informations de base et emet un evenement
   * $event 'wbu-fb-status-change'
   * @param {*} r
   */
  statusChangeCallback(r, getInfoUser = false) {
    this.user = r;
    if (getInfoUser) {
      var event = new CustomEvent("wbu-fb-status-change");
      document.dispatchEvent(event);
    }
    console.log("status", this.user);
  },
  getUserStatus() {
    var self = this;
    window.FB.getLoginStatus(function (response) {
      self.statusChangeCallback(response);
    });
  },
  chargement() {
    var self = this;
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    head.appendChild(js);
    js.id = "facebook-jssdk-021";
    // js.addEventListener("load", () => {
    //   console.log("Chargement du JS FACEBOOK END;");
    // });
    //
    js.onload = function () {
      function checkFB() {
        if (window.FB) {
          self.FB = window.FB;
          self.FB.init({
            appId: self.appId,
            cookie: true,
            xfbml: true,
            version: self.version,
            statue: false
          });
          console.log("Chargement du JS facebook");
          self.getUserStatus();
        } else {
          console.log("facebook not load");
          setTimeout(() => {
            checkFB();
          }, 900);
        }
      }
      checkFB();
    };
    js.src = "https://connect.facebook.net/en_US/sdk.js";
  }
});

/*
window.fbAsyncInit = function () {
  FB.init({
    appId: "344690973822888",
    cookie: true,
    xfbml: true,
    version: "v11.0",
  });
  FB.AppEvents.logPageView();
  Facebook.getUserStatus();
};
// Etape1 : chargement.
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
/**/
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=template&id=2646dca8&
var logingooglevue_type_template_id_2646dca8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "buttton-google-aouth",
    class: _vm.classRender,
    attrs: {
      "id": _vm.idHtmlrender
    }
  });
};
var logingooglevue_type_template_id_2646dca8_staticRenderFns = [];

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ var google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config_for_all.js
// Contient les methodes et attributs utilisé par toutes les sous modules.
/* harmony default export */ var config_for_all = ({
  /**
   *
   * @param {String} action
   * @param {Object} resp
   */
  AfterRedirect(action, url_redirect = null, resp = null) {
    console.log("AfterRedirect action .", action);
    var stepe = null;
    /**
     * Pour forcer la rediction.
     */
    if (action == "redirect" && url_redirect) {
      //
    } else if (action == "home") {
      window.location.assign("/");
    }
    // Reload current page.
    else if (action == "reload") {
      window.location.reload();
      console.log("reload this page");
    }
    // Emit event when is finnish.
    else if (action == "emit_even") {
      var event = new CustomEvent("login_rx_vuejs__user_is_login");
      document.dispatchEvent(event);
    }
    // Comportement par defaut.
    else if (action == "default") {
      // --; Si l'utilisateur est redirigé vers une autre url.
      if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
        window.location.assign(resp.reponse.request.responseURL);
      }
      // On demande la creation d'un utilisateur.
      else if (resp.data && resp.data.createuser) {
        stepe = "final-gl-register";
      }
      // On recharge la meme page.
      else if (resp.data) {
        window.location.reload();
      }
    }
    return stepe;
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=script&lang=js&
function loadScript(src) {
  return new Promise(resolv => {
    var s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}



/* harmony default export */ var logingooglevue_type_script_lang_js_ = ({
  name: "logingoogle",
  props: {
    idHtml: {
      type: String,
      required: true
    },
    returnUidInfo: {
      type: Boolean,
      default: false
    },
    classRender: {
      type: Array,
      default: function () {
        return ["mx-auto"];
      }
    },
    action_after_login: {
      type: String,
      default: "default"
    }
  },
  mounted() {
    if (!window.google) {
      loadScript("https://accounts.google.com/gsi/client").then(() => {
        this.getUserInfoFromFrame();
      });
    } else {
      this.getUserInfoFromFrame();
    }
  },
  computed: {
    idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    }
  },
  methods: {
    getUserInfoFromFrame() {
      var self = this;
      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: ", response);
        google.userAccess = {
          ...response,
          client_id: response.clientId
        };
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }
      console.log(" window.onload ! ", window.onload);
      const goo = () => {
        window.google.accounts.id.initialize({
          client_id: google.client_id,
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(document.getElementById(self.idHtmlrender), {
          theme: "outline",
          size: "large"
        } // customization attributes
        );

        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };

      goo();
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle() {
      // this.IsBusy();
      // this.getFields();
      return new Promise((resolv, reject) => {
        App_utilities.post("/login-rx-vuejs/google-check", google.userAccess).then(resp => {
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-success";
          this.alertText = "Connexion réussie";
          this.$emit("ev_logingoogle", resp.data);
          // Si on souhaite juste obtenir les infos concernant l'utilisateur.
          if (this.returnUidInfo) {
            resolv(resp);
            return;
          }
          config_for_all.AfterRedirect(this.action_after_login, null, resp);
          resolv(resp);
        }).catch(errors => {
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-danger";
          this.alertText = "Google : Erreur de connexion";
          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            this.alertText = errors.error.statusText;
          }
          console.log(" Error ajax ", errors.error);
          console.log(" Error ajax ", errors.code);
          console.log(" Error ajax ", errors.stack);
          reject(errors);
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_logingooglevue_type_script_lang_js_ = (logingooglevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=style&index=0&id=2646dca8&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue?vue&type=style&index=0&id=2646dca8&prod&lang=scss&

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/logingoogle.vue



;


/* normalize component */

var logingoogle_component = (0,componentNormalizer/* default */.Z)(
  components_logingooglevue_type_script_lang_js_,
  logingooglevue_type_template_id_2646dca8_render,
  logingooglevue_type_template_id_2646dca8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var logingoogle = (logingoogle_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=template&id=0f8cb978&
var loginRegistervue_type_template_id_0f8cb978_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ValidationObserver', {
    ref: "formValidate",
    attrs: {
      "tag": "form"
    }
  }, [_c('div', {
    staticClass: "login-page"
  }, [_vm.alertDisplay ? _c('div', {
    staticClass: "alert w-100",
    class: _vm.alertType,
    attrs: {
      "role": "alert"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.alertText)
    }
  }) : _vm._e(), _vm.isBusy ? _c('div', {
    staticClass: "spinner-grow text-primary",
    staticStyle: {
      "width": "3rem",
      "height": "3rem"
    },
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Chargement ...")])]) : _vm._e(), _c('transition', {
    attrs: {
      "name": "customslide"
    }
  }, [_c('div', {
    staticClass: "block-center"
  }, [_c(_vm.stepe, {
    tag: "component",
    attrs: {
      "urlLogo": _vm.urlLogo,
      "form": _vm.form,
      "formValidate": _vm.formValidate,
      "action_after_login": _vm.action_after_login,
      "model_register_form": _vm.model_register_form
    },
    on: {
      "select-stepe": _vm.selectStepe
    }
  })], 1)])], 1), _c('div', {
    staticClass: "politik-secur mx-auto text-center"
  }, [_vm._t("condition_utilisation", function () {
    return [_c('p', {
      staticClass: "text-white"
    }, [_vm._v(" En vous inscrivant, vous acceptez nos "), _c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v(" Conditions d'utilisation ")]), _vm._v(", de recevoir des emails et des MAJ de LESROISDELARENO et vous reconnaissez avoir lu notre "), _c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v(" Politique de confidentialité")])])];
  })], 2)]);
};
var loginRegistervue_type_template_id_0f8cb978_staticRenderFns = [];

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config.js




const vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
/* harmony default export */ var components_config = ({
  ...config_for_all,
  messages: {
    log_email: "Email ou Nom d'utilisateur",
    pass: "Mot de passe",
    login: "Nom d'utilisateur",
    mail: "Email",
    submit: {
      first: "Suivant",
      connect: "Connexion",
      register: "S'inscrire",
      final: "terminée"
    },
    devisCreateUser: "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
  },
  modalSuccess(body, conf) {
    return wbuutilities/* AjaxToastBootStrap.modalSuccess */.Ht.modalSuccess(body, conf);
  },
  /**
   *
   * @param {Array} text
   * @returns
   */
  msgCreate(texts) {
    var h = vm.$createElement;
    const text = [];
    for (const i in texts) {
      text.push(h("p", {
        domProps: {
          innerHTML: texts[i]
        },
        style: {
          lineHeight: "25px",
          fontSize: "17px",
          padding: "15px 15px 0px",
          margin: 0
        }
      }, []));
    }
    return h("div", {}, [text]);
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/checkstatus.vue?vue&type=template&id=fb2bab10&
var checkstatusvue_type_template_id_fb2bab10_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _c('h4', {
    staticClass: "title"
  }, [_vm._v("Connectez vous avec")]), _c('div', {
    staticClass: "content-center__btn-column"
  }, [_c('logingoogle', {
    attrs: {
      "idHtml": "default"
    }
  }), _c('div', {
    staticClass: "btn-login btn-login--facebook",
    on: {
      "click": _vm.loginFacebook
    }
  }, [_c('span', {
    staticClass: "btn-login__icon icon-facebook"
  }), _c('i', {
    staticClass: "btn-login__text"
  }, [_vm._v(" Facebook ")]), _vm.waiting === 'facebook' ? _c('svgWaiting') : _vm._e()], 1)], 1), _c('strong', {
    staticClass: "d-block"
  }, [_vm._v(" Ou ")]), _c('hr', {
    staticClass: "diviseur"
  }), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.log_email))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": "name",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.name[0].value,
            expression: "form.name[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "text",
            "name": "name"
          },
          domProps: {
            "value": _vm.form.name[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.name[0], "value", $event.target.value);
            }
          }
        }), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }])
  })], 1), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.checkUserStatus
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.first) + " ")]), _vm.waiting === 'wait' ? _c('svgWaiting') : _vm._e()], 1)])]);
};
var checkstatusvue_type_template_id_fb2bab10_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/checkstatus.vue?vue&type=script&lang=js&




//import { ValidationProvider } from "vee-validate";

/* harmony default export */ var checkstatusvue_type_script_lang_js_ = ({
  name: "checkstatus",
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    }
  },
  components: {
    svgWaiting: () => __webpack_require__.e(/* import() */ 542).then(__webpack_require__.bind(__webpack_require__, 9542)),
    //ValidationProvider,
    logingoogle: logingoogle
  },
  data() {
    return {
      messages: components_config.messages,
      waiting: ""
    };
  },
  methods: {
    loginFacebook() {
      this.waiting = "facebook";
      facebook.openPopup();
    },
    logOutFacebook() {
      facebook.logOut();
    },
    /**
     * Verifie si l'utilisateur existe deja.
     */
    async checkUserStatus() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/check-user-status";
      const test = await this.formValidate.validate();
      if (test) App_utilities.post(url, this.form).then(resp => {
        this.waiting = "";
        if (resp.data) this.$emit("select-stepe", "setPassword");else {
          this.$emit("select-stepe", "register");
        }
      });else this.waiting = "";
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/checkstatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_checkstatusvue_type_script_lang_js_ = (checkstatusvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/checkstatus.vue





/* normalize component */
;
var checkstatus_component = (0,componentNormalizer/* default */.Z)(
  components_checkstatusvue_type_script_lang_js_,
  checkstatusvue_type_template_id_fb2bab10_render,
  checkstatusvue_type_template_id_fb2bab10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var checkstatus = (checkstatus_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/setPassword.vue?vue&type=template&id=062e28fa&
var setPasswordvue_type_template_id_062e28fa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.pass))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('ValidationProvider', {
    ref: "refPass",
    attrs: {
      "name": "pass",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_vm.form.password ? _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.password[0].value,
            expression: "form.password[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "password",
            "name": "pass"
          },
          domProps: {
            "value": _vm.form.password[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.password[0], "value", $event.target.value);
            }
          }
        }) : _vm._e(), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }])
  })], 1), _c('a', {
    staticClass: "content-center__forgot-pass",
    attrs: {
      "href": "/user/password"
    }
  }, [_vm._v(" Mot de passe oublié ? ")]), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.Login
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.connect) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _c('hr'), _c('a', {
    staticClass: "text-center d-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('select-stepe', 'checkstatus');
      }
    }
  }, [_vm._v(" Retour ")])]);
};
var setPasswordvue_type_template_id_062e28fa_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/setPassword.vue?vue&type=script&lang=js&


//import { ValidationProvider } from "vee-validate";

/* harmony default export */ var setPasswordvue_type_script_lang_js_ = ({
  name: "checkstatus",
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    action_after_login: {
      type: String,
      required: true
    }
  },
  components: {
    svgWaiting: () => __webpack_require__.e(/* import() */ 542).then(__webpack_require__.bind(__webpack_require__, 9542))
    // ValidationProvider,
  },

  data() {
    return {
      messages: components_config.messages,
      waiting: ""
    };
  },
  mounted() {
    if (this.form.password === undefined) {
      this.$set(this.form, "password", [{
        value: ""
      }]);
    }
  },
  methods: {
    /**
     * --
     */
    async Login() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/user-connexion";
      const test = await this.formValidate.validate();
      setTimeout(() => {
        if (test) App_utilities.post(url, this.form).then(resp => {
          this.waiting = "";
          components_config.AfterRedirect(this.action_after_login, null, resp);
        }).catch(e => {
          this.$refs.refPass.setErrors([e.error.statusText]);
          this.waiting = "error";
        });else this.waiting = "";
      }, 3000);
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/setPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_setPasswordvue_type_script_lang_js_ = (setPasswordvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/setPassword.vue





/* normalize component */
;
var setPassword_component = (0,componentNormalizer/* default */.Z)(
  components_setPasswordvue_type_script_lang_js_,
  setPasswordvue_type_template_id_062e28fa_render,
  setPasswordvue_type_template_id_062e28fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var setPassword = (setPassword_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/register.vue?vue&type=template&id=9267574e&
var registervue_type_template_id_9267574e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _vm.model_register_form === 'default' ? _c('div', [_c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.login))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name[0].value,
      expression: "form.name[0].value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": "true",
      "name": "name"
    },
    domProps: {
      "value": _vm.form.name[0].value
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.name[0], "value", $event.target.value);
      }
    }
  })]), _vm.showPassword ? _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(" " + _vm._s(_vm.messages.pass) + " ")]) : _vm._e(), _vm.showPassword ? _c('div', {
    staticClass: "form-group content-center__input"
  }, [_vm.form.password ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.password[0].value,
      expression: "form.password[0].value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "pass"
    },
    domProps: {
      "value": _vm.form.password[0].value
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.password[0], "value", $event.target.value);
      }
    }
  }) : _vm._e()]) : _vm._e(), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.mail))]), _c('ValidationProvider', {
    ref: "mail",
    staticClass: "d-block w-100",
    attrs: {
      "name": "mail",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('div', {
          staticClass: "form-group content-center__input"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.mail[0].value,
            expression: "form.mail[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "mail",
            "name": "mail"
          },
          domProps: {
            "value": _vm.form.mail[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.mail[0], "value", $event.target.value);
            }
          }
        })]), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }], null, false, 3187930093)
  }), _vm._l(_vm.templates, function (temp, i) {
    return _c('ValidationProvider', {
      key: i,
      ref: temp.ref,
      refInFor: true,
      staticClass: "d-block w-100",
      scopedSlots: _vm._u([{
        key: "default",
        fn: function (v) {
          return [_c(temp, {
            tag: "component"
          }), _c('div', {
            staticClass: "text-danger text-small"
          }, _vm._l(v.errors, function (error, ii) {
            return _c('small', {
              key: ii,
              staticClass: "d-block"
            }, [_vm._v(" " + _vm._s(error) + " ")]);
          }), 0)];
        }
      }], null, true)
    });
  }), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.RegisterDefault
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _c('hr')], 2) : _vm._e(), _vm.model_register_form === 'generate_password' ? _c('div', [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Creation automatique du compte")]), _c('p', {
    staticClass: "mb-4"
  }, [_vm._v(" Vos informations de connexion seront transferés à cette adresse. ")]), _vm.validEmail(_vm.form.name[0].value) ? _c('div', {
    staticClass: "mb-5"
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.form.name[0].value) + " ")]), _vm._v(" " + _vm._s(_vm.set_email()) + " ")]) : _vm._e(), !_vm.validEmail(_vm.form.name[0].value) ? _c('div', [_c('ValidationProvider', {
    ref: "mail",
    staticClass: "d-block w-100",
    attrs: {
      "name": "mail",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('div', {
          staticClass: "form-group content-center__input"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.mail[0].value,
            expression: "form.mail[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "mail",
            "name": "mail"
          },
          domProps: {
            "value": _vm.form.mail[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.mail[0], "value", $event.target.value);
            }
          }
        })]), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }], null, false, 3187930093)
  })], 1) : _vm._e(), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.generatePassword
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)])]) : _vm._e(), _c('a', {
    staticClass: "text-center d-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('select-stepe', 'checkstatus');
      }
    }
  }, [_vm._v(" Retour ")])]);
};
var registervue_type_template_id_9267574e_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/register.vue?vue&type=script&lang=js&


//import { ValidationProvider } from "vee-validate";

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  name: "checkstatus",
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    action_after_login: {
      type: String,
      required: true
    },
    model_register_form: {
      type: String,
      required: true
    }
  },
  components: {
    svgWaiting: () => __webpack_require__.e(/* import() */ 542).then(__webpack_require__.bind(__webpack_require__, 9542))
    //ValidationProvider,
  },

  data() {
    return {
      messages: components_config.messages,
      waiting: "",
      templates: []
    };
  },
  mounted() {
    if (this.showPassword) {
      if (this.form.password === undefined) {
        this.$set(this.form, "password", [{
          value: ""
        }]);
      }
    } else if (this.form.password) {
      delete this.form.password;
    }
    this.getFields();
  },
  methods: {
    async generatePassword() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/genrate-password";
      const test = await this.formValidate.validate();
      if (test) {
        App_utilities.post(url, this.form).then(resp => {
          console.log("resp : ", resp);
          this.waiting = "";
          components_config.AfterRedirect(this.action_after_login, resp);
        }).catch(() => {
          this.waiting = "";
        });
      } else {
        this.waiting = "";
        console.log("echec de validation de mail");
      }
    },
    /**
     * --
     */
    async RegisterDefault() {
      this.waiting = "wait";
      var url = "/user/register?_format=json";
      const test = await this.formValidate.validate();
      if (test) App_utilities.post(url, this.form).then(resp => {
        console.log("resp : ", resp);
        this.waiting = "";
        components_config.modalSuccess(components_config.msgCreate([this.messages.devisCreateUser]), {
          title: "Votre compte a été crré",
          footerClass: "d-none",
          headerBgVariant: "success",
          headerTextVariant: "light"
        }).then(() => {
          components_config.AfterRedirect(this.action_after_login, resp);
        });
      }).catch(e => {
        this.waiting = "";
        // console.log("catch : ", e);
        if (e.error && e.error.data && e.error.data.errors) {
          const errors = e.error.data.errors;
          // console.log(" this.$refs : ", this.$refs);
          errors.forEach(error => {
            const field = error.split(":");
            // console.log(" field : ", field);
            if (this.$refs[field[0]]) {
              if (this.$refs[field[0]][0]) {
                this.$refs[field[0]][0].setErrors([field[1]]);
              } else this.$refs[field[0]].setErrors([field[1]]);
            }
          });
        }
      });else this.waiting = "";
    },
    /**
     * --
     */
    getFields() {
      const fds = new formatFieldsBootstrap("user", "user");
      fds.format().then(resp => {
        this.templates = resp.templates;
        for (const fieldName in resp.models) {
          this.$set(this.form, fieldName, resp.models[fieldName]);
        }
        console.log("resp : ", resp);
      });
    },
    validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    set_email() {
      this.form.mail = this.form.name;
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/register.vue





/* normalize component */
;
var register_component = (0,componentNormalizer/* default */.Z)(
  components_registervue_type_script_lang_js_,
  registervue_type_template_id_9267574e_render,
  registervue_type_template_id_9267574e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var register = (register_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=script&lang=js&




//import { ValidationObserver } from "vee-validate";





/* harmony default export */ var loginRegistervue_type_script_lang_js_ = ({
  props: {
    // see config_for_all.AfterRedirect for more informations.
    action_after_login: {
      type: String,
      default: "default"
    },
    model_register_form: {
      type: String,
      default: "default"
    }
  },
  name: "LoginRegister",
  /**
   * --
   */

  components: {
    //ValidationObserver,
  },
  /**
   * --
   */
  data() {
    return {
      messages: components_config.messages,
      waiting: "",
      form: {
        name: [{
          value: ""
        }],
        mail: [{
          value: ""
        }]
      },
      password: "",
      mail: "",
      stepe: checkstatus,
      models: {},
      baseURl: src_config.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme,
      formValidate: {}
    };
  },
  /**
   * --
   */
  mounted() {
    facebook.appId = 889256191665205;
    this.TryToLoginWithFacebook();
    facebook.chargement();
    this.formValidate = this.$refs.formValidate;
  },
  methods: {
    selectStepe(step) {
      switch (step) {
        case "checkstatus":
          this.stepe = checkstatus;
          break;
        case "setPassword":
          this.stepe = setPassword;
          break;
        case "register":
          this.stepe = register;
          break;
      }
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook() {
      document.addEventListener("wbu-fb-status-change", () => {
        this.isBusy = true;
        this.getFields();
        App_utilities.post("/login-rx-vuejs/facebook-check", facebook.user).then(resp => {
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-success";
          this.alertText = " Connexion réussie  ";
          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            window.location.assign(resp.reponse.request.responseURL);
          }
          // il faut s'assurer que les données sont ok.
          else if (resp.data && resp.data.createuser) {
            this.stepe = "final-fb-register";
          } else {
            window.location.assign(window.location.origin);
          }
        }).catch(errors => {
          this.isBusy = false;
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-danger";
          this.alertText = "Facebook : Erreur de connexion ";
          if (errors.error) {
            this.alertText = errors.error.statusText;
          }
        });
      }, false);
    },
    IsBusy() {
      this.isBusy = true;
      console.log("this.isbusy", this.isBusy);
    },
    /**
     * --
     */
    async finalRegister() {
      this.waiting = "wait";
      var params = {};
      var url = "";
      if (this.stepe === "final-gl-register") {
        url = "/login-rx-vuejs/google-login";
        params = {
          fields: this.models,
          google: []
        };
      } else if (this.stepe === "final-fb-register") {
        url = "/login-rx-vuejs/facebook-login";
        params = {
          fields: this.models,
          facebook: facebook.user
        };
      }
      const test = await this.$refs.formValidate.validate();
      if (test) App_utilities.post(url, params).then(resp => {
        console.log(resp);
        this.waiting = "";
        if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
          window.location.assign(resp.reponse.request.responseURL);
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loginRegistervue_type_script_lang_js_ = (loginRegistervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=style&index=0&id=0f8cb978&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/loginRegister.vue?vue&type=style&index=0&id=0f8cb978&prod&lang=scss&

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/loginRegister.vue



;


/* normalize component */

var loginRegister_component = (0,componentNormalizer/* default */.Z)(
  components_loginRegistervue_type_script_lang_js_,
  loginRegistervue_type_template_id_0f8cb978_render,
  loginRegistervue_type_template_id_0f8cb978_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loginRegister = (loginRegister_component.exports);
;// CONCATENATED MODULE: ../drupal-vuejs/index.js









;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue?vue&type=script&lang=js&





/* harmony default export */ var MultiSelectvue_type_script_lang_js_ = ({
  name: "MultiSelect",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    Multiselect: (vue_multiselect_min_default())
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
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
      isLoading: false,
      options: []
    };
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      } else return null;
    },
    nameWithLang({
      text
    }) {
      return `${text}`;
    },
    asyncFind(search) {
      if (search.length >= 2) {
        // Doit etre dynamique.
        let vocabulary = "domaine_competance";
        const terms = new jsonApi_termsTaxo(vocabulary);
        this.isLoading = true;
        terms.getSearch(search).then(() => {
          this.options = terms.getOptions();
          this.isLoading = false;
        });
        // loadField
      }
    },

    selectUser(input) {
      const vals = [];
      vals.push({
        target_id: input.value
      });
      this.setValue(vals);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_MultiSelectvue_type_script_lang_js_ = (MultiSelectvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue



;


/* normalize component */

var MultiSelect_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_MultiSelectvue_type_script_lang_js_,
  MultiSelectvue_type_template_id_90dd4c54_render,
  MultiSelectvue_type_template_id_90dd4c54_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiSelect = (MultiSelect_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=template&id=169620ed&scoped=true&
var ValueNiveauvue_type_template_id_169620ed_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "complexe_field",
    class: _vm.classCss
  }, [_c('h4', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.field.label))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "pb-3 field-mutiple",
    attrs: {
      "id": _vm.idHtml
    }
  }, _vm._l(_vm.model[_vm.field.name], function (val, k) {
    return _c('div', {
      key: k,
      staticClass: "field-item-value mb-4"
    }, [_c('div', {
      staticClass: "bg-light p-4 px-5"
    }, [_c('div', {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c('div', {
      staticClass: "text"
    }, [_vm.terms['tid-' + val.target_id] ? _c('div', {
      staticClass: "font-weight-bold"
    }, [_vm._v(" " + _vm._s(_vm.terms["tid-" + val.target_id].name) + " ")]) : _vm._e(), !_vm.terms['tid-' + val.target_id] ? _c('i', {
      staticClass: "text-muted font-weight-bold"
    }, [_vm._v(" Competance ... ")]) : _vm._e(), _c('div', {
      staticClass: "d-flex"
    }, [_c('span', [_vm._v(" " + _vm._s(_vm.field.entity_form_settings.niveau_options[val.niveau]) + " ")])])]), _c('div', {
      staticClass: "icon-buttons"
    }, [_c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-5",
      attrs: {
        "variant": "light",
        "title": "Editer"
      },
      on: {
        "click": function ($event) {
          return _vm.Edit(val);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "pencil-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action btn-drag-drop mr-5",
      attrs: {
        "variant": "light",
        "title": "Glisser-déposer"
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "arrows-move",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-4",
      attrs: {
        "variant": "light",
        "title": "Supprimer"
      },
      on: {
        "click": function ($event) {
          return _vm.removeField(k);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "trash-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1)])])])]);
  }), 0), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "add-new-card",
    on: {
      "click": _vm.add
    }
  }, [_c('div', {
    staticClass: "anc-content d-flex align-items-center"
  }, [_c('b-icon', {
    staticClass: "text-info",
    attrs: {
      "icon": "plus-circle-fill",
      "font-scale": "1.5"
    }
  }), _c('h4', {
    staticClass: "anc-titre"
  }, [_vm._v(_vm._s(_vm.addButtonTitle))])], 1)]), _vm.showFormEdit ? _c('EditValueNiveau', {
    attrs: {
      "f-value": _vm.currentEditValue,
      "field": _vm.field,
      "terms": _vm.terms
    },
    on: {
      "closeEditForm": _vm.closeEditForm,
      "setValue": _vm.setValue,
      "addTermsInCache": _vm.addTermsInCache
    }
  }) : _vm._e()], 1);
};
var ValueNiveauvue_type_template_id_169620ed_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue?vue&type=template&id=d9811d0c&
var EditValueNiveauvue_type_template_id_d9811d0c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('div', {
    staticClass: "p-3 py-5",
    on: {
      "click": function ($event) {
        return _vm.$emit('closeEditForm');
      }
    }
  }, [_c('span', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        "hover": true
      }
    }],
    staticClass: "btn-action btn-back",
    attrs: {
      "variant": "light",
      "title": "Back"
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "arrow-left",
      "variant": "secondary",
      "font-scale": "1"
    }
  }), _vm._v(" Retour ")], 1)]), _c('div', {
    staticClass: "add-item-form"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.settings.label_target_id
          }
        }, [_c('div', {
          staticClass: "autocomplete"
        }, [_c('multiselect', {
          attrs: {
            "options": _vm.options,
            "custom-label": _vm.nameWithLang,
            "placeholder": "",
            "label": "text",
            "track-by": "text",
            "show-no-results": false,
            "showLabels": false,
            "loading": _vm.isLoading
          },
          on: {
            "search-change": _vm.asyncFind,
            "select": _vm.selectUser
          },
          model: {
            value: _vm.value_select,
            callback: function ($$v) {
              _vm.value_select = $$v;
            },
            expression: "value_select"
          }
        }, [_c('template', {
          slot: "noResult"
        }, [_c('span', {
          staticClass: "option__titl d-none"
        }, [_vm._v(" Aucun contenu ")])]), _c('template', {
          slot: "placeholder"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Le terme n'existe pas ")])]), _c('template', {
          slot: "noOptions"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Saisir un terme ")])])], 2), _c('div', {
          staticClass: "text-danger"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)], 1)]), _c('div', {
          staticClass: "fi-input"
        }, [_c('label', {
          attrs: {
            "for": "input-niveau"
          }
        }, [_vm._v(_vm._s(_vm.settings.label_niveau))]), _c('b-form-select', {
          attrs: {
            "id": "input-niveau",
            "type": "text",
            "placeholder": "Titre",
            "required": "",
            "options": _vm.optionsNiveau
          },
          on: {
            "change": _vm.selectNiveau
          },
          model: {
            value: _vm.form.niveau,
            callback: function ($$v) {
              _vm.$set(_vm.form, "niveau", $$v);
            },
            expression: "form.niveau"
          }
        }), _c('b-form-text', [_vm._v(" p.ex. Moyen ")])], 1)];
      }
    }])
  })], 1)]);
};
var EditValueNiveauvue_type_template_id_d9811d0c_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue?vue&type=script&lang=js&





class EditValueNiveauvue_type_script_lang_js_CreateInstance {
  constructor(value) {
    this.name = value;
  }
  getValue() {
    return this.name;
  }
}
/* harmony default export */ var EditValueNiveauvue_type_script_lang_js_ = ({
  name: "MultiSelect",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    Multiselect: (vue_multiselect_min_default())
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    fValue: {
      type: Object,
      require: true,
      default: function () {
        return {};
      }
    },
    terms: {
      type: [Object],
      default: function () {
        return {};
      }
    }
  },
  data() {
    return {
      isLoading: false,
      options: [],
      form: {},
      value_select: null
    };
  },
  computed: {
    settings() {
      if (this.field.entity_form_settings) {
        return this.field.entity_form_settings;
      } else return {};
    },
    optionsNiveau() {
      if (this.field.entity_form_settings && this.field.entity_form_settings.niveau_options) {
        const options = [];
        for (const i in this.field.entity_form_settings.niveau_options) {
          options.push({
            text: this.field.entity_form_settings.niveau_options[i],
            value: i
          });
        }
        return options;
      } else return [];
    }
  },
  mounted() {
    const v = new EditValueNiveauvue_type_script_lang_js_CreateInstance(this.fValue);
    this.form = v.getValue();
    this.buildDefaultOptions();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      } else return null;
    },
    nameWithLang({
      text
    }) {
      return `${text}`;
    },
    asyncFind(search) {
      if (search.length >= 2) {
        // Doit etre dynamique.
        let vocabulary = "domaine_competance";
        const terms = new jsonApi_termsTaxo(vocabulary);
        this.isLoading = true;
        terms.getSearch(search).then(() => {
          this.options = terms.getOptions();
          this.isLoading = false;
          this.$emit("addTermsInCache", terms.terms.data);
        });
        //
      }
    },

    selectUser(input) {
      console.log("update input Term : ", input.value);
      this.form.target_id = input.value;
      this.$emit("setValue", input);
    },
    selectNiveau() {
      console.log("update input Niveau");
      this.$emit("setValue");
    },
    buildDefaultOptions() {
      for (const i in this.terms) {
        const option = {
          text: this.terms[i].name,
          value: this.terms[i].drupal_internal__tid
        };
        this.options.push(option);
        if (this.terms[i].drupal_internal__tid == this.form.target_id) {
          this.value_select = option;
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_EditValueNiveauvue_type_script_lang_js_ = (EditValueNiveauvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue



;


/* normalize component */

var EditValueNiveau_component = (0,componentNormalizer/* default */.Z)(
  Ressouces_EditValueNiveauvue_type_script_lang_js_,
  EditValueNiveauvue_type_template_id_d9811d0c_render,
  EditValueNiveauvue_type_template_id_d9811d0c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditValueNiveau = (EditValueNiveau_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=script&lang=js&




const ValueNiveauvue_type_script_lang_js_defaultValue = () => {
  return {
    target_id: null,
    niveau: 1
  };
};
/* harmony default export */ var ValueNiveauvue_type_script_lang_js_ = ({
  name: "MultiSelect",
  components: {
    EditValueNiveau: EditValueNiveau
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
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
    addButtonTitle: {
      type: String,
      default: "Ajouter"
    }
  },
  data() {
    return {
      idHtml: "sort-" + Math.random().toString(36),
      currentEditValue: {},
      showFormEdit: false,
      /**
       * Contient les termes recuperés.
       * ( Evite d'effectuer pluiseurs requetes pour un meme terme )
       */
      terms: {}
    };
  },
  mounted() {
    var el = document.getElementById(this.idHtml);
    this.loadDefaults();
    sortable_esm/* default.create */.ZP.create(el, {
      animation: 150,
      handle: ".btn-drag-drop",
      ghostClass: "blue-background-class"
    });
  },
  methods: {
    add() {
      this.$emit("addNewValue", ValueNiveauvue_type_script_lang_js_defaultValue());
    },
    //
    removeField(index) {
      console.log("removeField in fields : ", index);
      this.$emit("removeField", index);
    },
    Edit(value) {
      this.currentEditValue = value;
      this.showFormEdit = true;
    },
    closeEditForm() {
      this.showFormEdit = false;
    },
    getTermByTid(tid) {
      if (!this.terms["tid-" + tid]) {
        console.log("help : getTermByTid");
        // Doit etre dynamique.
        let vocabulary = "domaine_competance";
        const terms = new jsonApi_termsTaxo(vocabulary);
        terms.getValueByTid(tid).then(resp => {
          if (resp.data[0] && resp.data[0].attributes) this.$set(this.terms, "tid-" + tid, resp.data[0].attributes);else this.$set(this.terms, "tid-" + tid, {});
          console.log(this.terms);
        });
      }
    },
    addTermsInCache(vals) {
      vals.forEach(term => {
        if (!this.terms["tid-" + term.attributes.drupal_internal__tid]) {
          this.$set(this.terms, "tid-" + term.attributes.drupal_internal__tid, term.attributes);
        }
      });
    },
    loadDefaults() {
      this.model[this.field.name].forEach(item => {
        this.getTermByTid(item.target_id);
      });
    },
    /**
     * On passe les données valides au champs.
     */
    setValue() {
      console.log("set value : ");
      const vals = [];
      // suppression des donnée non valide.
      this.model[this.field.name].forEach(item => {
        if (item.target_id) {
          vals.push(item);
        }
      });
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_ValueNiveauvue_type_script_lang_js_ = (ValueNiveauvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=style&index=0&id=169620ed&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=style&index=0&id=169620ed&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue



;


/* normalize component */

var ValueNiveau_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_ValueNiveauvue_type_script_lang_js_,
  ValueNiveauvue_type_template_id_169620ed_scoped_true_render,
  ValueNiveauvue_type_template_id_169620ed_scoped_true_staticRenderFns,
  false,
  null,
  "169620ed",
  null
  
)

/* harmony default export */ var ValueNiveau = (ValueNiveau_component.exports);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js













external_commonjs_vue_commonjs2_vue_root_Vue_default().use((ckeditor_default()));
/* harmony default export */ var loadField = ({
  debug: false,
  /**
   * Contient les methodes de wbu-utilities provenant du parent.
   */
  config: {},
  getField(field) {
    var key = field.type;
    if (key == "list_string" && field.cardinality == 1) key = "boolean";
    var template;
    if (this.debug) console.log(" key : ", key);
    switch (key) {
      case "string":
        template = drupal_string;
        break;
      case "link":
        template = drupal_link;
        break;
      case "color_theme_field_type":
        template = drupal_color;
        break;
      case "boolean":
        template = drupal_boolean;
        break;
      case "list_string":
        template = drupal_list_string;
        break;
      case "render_html":
        template = html_render;
        break;
      case "text_long":
        template = textarea_ckeditor;
        break;
      case "image":
        template = drupal_file;
        break;
      case "experience_type":
        template = ExperienceType;
        break;
      case "entity_reference":
        // à ce state, on pourra distinguer plusieurs cas.
        if (field.settings.target_type == "taxonomy_term") {
          template = MultiSelect;
        } else console.log("Champs sans rendu :", key, "\n field : ", field);
        break;
      case "value_niveau_type":
        template = ValueNiveau;
        break;
      default:
        console.log("Champs sans rendu :", key, "\n field : ", field);
        break;
    }
    return template;
  },
  getImageUrl(fid, style = "medium") {
    return this.config.get("/vuejs-entity/image/" + fid + "/" + style);
  },
  getRules(field) {
    const rules = {};
    if (field.constraints) {
      for (const i in field.constraints) {
        if (i == "NotNull") {
          rules["required"] = true;
        }
      }
    }
    return rules;
  },
  getConfig(config) {
    this.config = config;
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/FormuLaire.vue?vue&type=script&lang=js&




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
      form: state => state.currentEntityForm.form,
      model: state => state.currentEntityForm.model
    }),
    idEntity() {
      if (this.form.label !== "") {
        var id = request/* default.generateIdEntityType */.Z.generateIdEntityType(this.form.label);
        this.setId(id);
        return id;
      } else return "";
    }
  },
  mounted() {
    loadField.getConfig(request/* default */.Z);
  },
  methods: {
    /**
     * @private
     * @param {*} event
     */
    onSubmit(event) {
      event.preventDefault();
      this.submit();
    },
    /**
     * @public
     */
    submit() {
      return this.$store.dispatch("saveEntity");
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.id = "";
      this.form.label = "";
      this.form.description = "";
      this.form.users = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    setId(id) {
      // Si l'uuid n'existe, alors c'est une creation de type, on peut generer l'id.
      if (!this.form.uuid) this.form.id = id;
    },
    buildFields() {
      const fields = [];
      for (const i in this.form) {
        fields.push({
          template: loadField.getField(this.form[i]),
          field: this.form[i],
          model: this.model
        });
      }
      return fields;
    },
    addNewValue(value, render) {
      this.model[render.field.name].push(value);
    },
    removeField(index, render) {
      this.model[render.field.name].splice(index, 1);
    }
  }
});
;// CONCATENATED MODULE: ./src/App/FormuLaire.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_FormuLairevue_type_script_lang_js_ = (FormuLairevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/App/FormuLaire.vue





/* normalize component */
;
var FormuLaire_component = (0,componentNormalizer/* default */.Z)(
  App_FormuLairevue_type_script_lang_js_,
  FormuLairevue_type_template_id_4ecaedd9_render,
  FormuLairevue_type_template_id_4ecaedd9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormuLaire = (FormuLaire_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/ModalForm.vue?vue&type=script&lang=js&

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
    handleOk() {
      this.$refs.formEdit.submit().then(() => {
        this.$bvModal.hide("b-modal-manage-project");
        window.location.assign(window.location.pathname);
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
  ModalFormvue_type_template_id_3e311296_render,
  ModalFormvue_type_template_id_3e311296_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalForm = (ModalForm_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App/EditEntity.vue?vue&type=script&lang=js&


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
              console.log("data is clean");
              this.initEdit(even);
            });
          } else this.initEdit(even);
        }
      }, false);
    },
    initEdit(even) {
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
//# sourceMappingURL=EditEntity.common.665.js.map