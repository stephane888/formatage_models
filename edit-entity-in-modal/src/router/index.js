import Vue from "vue";
import VueRouter from "vue-router";
//import App from "../App.vue";
import LayoutView from "../views/LayoutView.vue";
//import EtapePresentation from "../formulaires/EtapePresentation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "editentity",
    component: LayoutView,
    meta: {
      requiresAuth: false,
      hideFooter: true,
    },
    children: [
      {
        path: "/editentity",
        name: "editentity",
        meta: {
          requiresAuth: false,
          hideFooter: true,
        },
        component: () => import("../App/EditEntity.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  //mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
