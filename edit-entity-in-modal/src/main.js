import Vue from "vue";
//import App from "./App.vue";
import App from "./tests/TestCkeditor.vue";
import store from "./store";
import router from "./router";
// import bootstrap.
import "./plugins/AppCmpts.js";
Vue.config.productionTip = false;
//
import buttons from "components_h_vuejs/src/components/Buttons/index.js";
import cards from "components_h_vuejs/src/components/Cards/index.js";
Vue.use(buttons);
Vue.use(cards);
//
import ContainerPage from "./views/ContainerPage.vue";
Vue.component("ContainerPage", ContainerPage);
//
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
//import "drupal-vuejs/src/App/components/vee-validate-custom.js";
import { required, email, alpha } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "Ce champs est requis",
});
extend("email", email);
extend("alpha", alpha);
//
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
