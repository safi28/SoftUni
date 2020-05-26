import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";
import Vuesax from "vuesax";
import VueNoty from "vuejs-noty";
import "firebase/firestore";
const AlertCmp = () => import("./components/auth/Alert.vue");
Vue.component("app-alert", AlertCmp);

Vue.config.productionTip = false;

const ignoreWarnMessage =
  "The .native modifier for v-on is only valid on components but it was used on <div>.";
Vue.config.warnHandler = function(msg, vm, trace) {
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
};

const configOptions = {
  apiKey: "AIzaSyDnQhgNny7mfLq-i49_RK2JHFvDGmDjz8I",
  authDomain: "vue-project-93965.firebaseapp.com",
  databaseURL: "https://vue-project-93965.firebaseio.com",
  projectId: "vue-project-93965",
  storageBucket: "vue-project-93965.appspot.com",
  messagingSenderId: "630574009533",
  appId: "1:630574009533:web:3e0a22134673233be53bd4",
};
firebase.initializeApp(configOptions);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  vuetify,
  Vuesax,
  VueNoty,
  render: (h) => h(App),
}).$mount("#app");
