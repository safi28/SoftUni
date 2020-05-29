<template>
  <div id="app">
    <HeaderUnL></HeaderUnL>
    <h1></h1>

    <v-container class="box">
      <v-layout row v-if="error">
        <v-flex xs12 sm6 offset-sm3>
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex class="container">
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignup">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="name"
                        label="Name"
                        id="name"
                        v-model="name"
                        type="name"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                        v-model="email"
                        type="email"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="password"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirm Password"
                        id="confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                        :rules="[comparePasswords]"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <div class="text-xs-center">
                        <v-btn rounded type="submit" :disabled="loading" :loading="loading">
                          Sign up
                          <span slot="loader" class="custom-loader">
                            <v-icon light>Loading..</v-icon>
                          </span>
                        </v-btn>
                      </div>
                      <br />Have an account?
                      <br />
                      <router-link :to="{ name: 'Signin'}">Login</router-link>
                      <br />
                      <br />
                      <router-link :to="{ name: 'publicHome'}">Home</router-link>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <h1></h1>
  </div>
</template>

<script>
import Noty from "noty";
import HeaderUnL from "@/components/core/Shared/HeaderUnL.vue";
export default {
  components: { HeaderUnL },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/signin");
      }
    }
  },
  methods: {
    onSignup() {
      this.$store
        .dispatch("signUserUp", {
          email: this.email,
          password: this.password
        })
        .then(function(user) {
          el.user.updateProfile({
            displayName: this.name
          });
          this.$router.replace({ name: "Signin" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>
<style scoped>
.container {
  background-image: url("https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  padding: 6px;
  left: 160%;
}
h1 {
  left: 20%;
  padding: 10px;
  font-style: italic;
}
h4 {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  opacity: 0.85;
}

label {
  font-size: 12.5px;
  color: #000;
  opacity: 0.8;
  font-weight: 400;
}

form {
  margin: 10px;
  padding: 90px 60px;
  background: #fefefe;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  padding-bottom: 99px;
  width: 300px;
}
form h4 {
  margin-bottom: 50px;
  color: rgba(0, 0, 0, 0.5);
}
form h4 span {
  color: black;
  font-weight: 700;
}
form p {
  line-height: 155%;
  margin-bottom: 5px;
  font-size: 14px;
  color: #000;
  opacity: 0.65;
  font-weight: 400;
  max-width: 400px;
  margin-bottom: 40px;
}
</style>
