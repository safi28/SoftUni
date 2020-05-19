<template>
  <section class="hero">
    <mainMenu></mainMenu>

    <div class="card-container">
      <span class="pro">PRO</span>
      <img class="round" src="../../assets/user.svg" alt="user" />
      <h3>{{user}}</h3>
      <h6>New York</h6>
      <p>
        User interface designer and
        <br />front-end developer
      </p>
      <div class="buttons">
        <button class="primary">Message</button>
        <button @click="signOut()" class="primary ghost">Logout</button>
      </div>
      <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import * as firebase from "firebase/app";
import { mapState, mapMutations } from "vuex";
import mainMenu from "@/components/core/Shared/Main.vue";
import Noty from "noty";
export default {
  pageTitle: "My Profile",
  name: "profile",
  components: { mainMenu },
  props: {
    isAuth: Boolean
  },
  data() {
    return {
      // username: this.$store.getters.user
    };
  },
  computed: {
    // ...mapState({ user: "user" })
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch("logout");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");

      this.$emit("onAuth", false);
      this.$noty.success("Logged out successfully!");
      this.$router.replace({ name: "publicHome" });
    }
  }
};
</script>
<style scoped>
.hero {
  background: linear-gradient(
      to top right,
      rgba(213, 217, 238, 0.7),
      rgba(228, 228, 192, 0.7)
    ),
    url("https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  /* background: url(""); */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  width: 100vw;
}
html,
body {
  height: 100%;
  font-family: monospace;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

.source {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
}
.source a {
  color: #fff;
  text-decoration: none;
}
.source a span {
  opacity: 0.32;
}

.phone {
  display: -webkit-box;
  display: flex;
  width: 25em;
  height: 25em;
  background-color: #f3f3f3;
  border-radius: 32px;
  overflow: hidden;
}

.phone-footer {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 6em;
  padding-left: 2em;
  padding-right: 2em;
  background-color: #fff;
  margin-top: auto;
}

.nav {
  display: -webkit-box;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.nav-item {
  position: relative;
  display: -webkit-box;
  display: flex;
  padding: 8px;
  border-radius: 16px;
}
.nav-item:nth-child(1) {
  background-color: #e8e2f6;
}
.nav-item:nth-child(1) label {
  background-color: #5b37b7;
}
.nav-item:nth-child(1) span {
  color: #5b37b7;
}
.nav-item:nth-child(1) span:before {
  background-color: #5b37b7;
}
.nav-item:nth-child(2) {
  background-color: #f6e3f1;
}
.nav-item:nth-child(2) label {
  background-color: #b73892;
}
.nav-item:nth-child(2) span {
  color: #b73892;
}
.nav-item:nth-child(2) span:before {
  background-color: #b73892;
}
.nav-item:nth-child(3) {
  background-color: #fff3d9;
}
.nav-item:nth-child(3) label {
  background-color: #eda600;
}
.nav-item:nth-child(3) span {
  color: #eda600;
}
.nav-item:nth-child(3) span:before {
  background-color: #eda600;
}
.nav-item:nth-child(4) {
  background-color: #afedf7;
}
.nav-item:nth-child(4) label {
  background-color: #1194aa;
}
.nav-item:nth-child(4) span {
  color: #1194aa;
}
.nav-item:nth-child(4) span:before {
  background-color: #1194aa;
}
.nav-item * {
  cursor: pointer;
}
.nav-item label {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: inherit;
  border-radius: 50%;
}
.nav-item label:before {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background-color: transparent;
}
.nav-item span {
  font-size: 0.875em;
  margin-left: 0;
  max-width: 0;
  overflow: hidden;
  -webkit-transition-property: max-width, margin-left;
  transition-property: max-width, margin-left;
  -webkit-transition-duration: 0.32s;
  transition-duration: 0.32s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.nav-item span:before {
  content: "";
  opacity: 0;
  position: fixed;
  z-index: -1;
  top: 50%;
  margin-top: -100rem;
  left: 50%;
  margin-left: -100rem;
  width: 200rem;
  height: 200rem;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
  border-radius: 50%;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
  -webkit-transition-duration: 0.32s;
  transition-duration: 0.32s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.nav-item input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
}
.nav-item input:checked + span {
  max-width: 100vw;
  margin-left: 4px;
}
.nav-item input:checked + span:before {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
h3 {
  margin: 10px 0;
}

h6 {
  margin: 5px 0;
  text-transform: uppercase;
}

p {
  font-size: 14px;
  line-height: 21px;
}

.card-container {
  background-color: #231e39;
  border-radius: 25px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
  left: 560px;
}

.card-container .pro {
  color: #231e39;
  background-color: #febb0b;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 30px;
  left: 30px;
}

.card-container .round {
  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
}

button.primary {
  background-color: #03bfcb;
  border: 1px solid #03bfcb;
  border-radius: 3px;
  color: #231e39;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899c;
}

.skills {
  background-color: #1f1a36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.skills ul li {
  border: 1px solid #2d2747;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}
</style>