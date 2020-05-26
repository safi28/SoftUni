import Vue from "vue";
import Vuex from "vuex";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import Vuetify from "vuetify";
import Vuesax from "vuesax";
import VueNoty from "vuejs-noty";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import user from "./user/index";
import shared from './shared';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMaterial);
Vue.use(Vuetify);
Vue.use(Vuesax);
Vue.use(VueNoty, {
  timeout: 1000,
  progressBar: true,
  layout: "topRight"
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: user,
    shared: shared
  }
});

export const store = Vue.observable({
  isNavOpen: false
});
export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};
