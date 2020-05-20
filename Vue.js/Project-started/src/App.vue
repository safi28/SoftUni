<template>
  <div class="app">
    <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/core/Shared/Footer";
import * as firebase from "firebase";

import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({
    isAuth: localStorage.getItem('token') !== null
  }),

  computed: {
     userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
  },
};
</script>
