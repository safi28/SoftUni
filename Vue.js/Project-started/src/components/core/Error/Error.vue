<template>
  <v-app class="all">
    <div class="wrapper">
      <h1>404 Error Page #2</h1>
      <p class="zoom-area"></p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
    </div>
    <div class="home" v-if="userIsAuthenticated">
      <router-link to="/dashboard">
        <button>Home</button>
      </router-link>
    </div>
    <div class="home" v-else>
      <router-link to="/">
        <button>Home</button>
      </router-link>
    </div>
  </v-app>
</template>
<script>
export default {
  props: {
    isAuth: Boolean
  },
  data() {
    return {};
  },
  computed: {
    userIsAuthenticated() {
      return this.$emit("onAuth", localStorage.getItem("token") !== null);
    }
  }
};
</script>

<style lang="css" scoped>
@import url("./styles-error.css");
.all {
  background-image: url('https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
</style>