<template>
  <v-container>
    <h1>Login form</h1>

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
              <form @submit.prevent="onSignin">
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
                  <v-flex xs24>
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
                    <div class="text-xs-center">
                      <v-btn rounded type="submit" :disabled="loading" :loading="loading">
                        Sign in
                        <span slot="loader" class="custom-loader">
                          <v-icon light>Loading...</v-icon>
                        </span>
                      </v-btn>
                    </div>
                    <br />Don't have an account?
                    <br />
                    <br />
                    <router-link :to="{ name: 'Signup'}">Register</router-link>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Noty from "noty";
import HeaderUnL from "@/components/core/Shared/HeaderUnL.vue";
import router from "@/router/index";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: { HeaderUnL },
  computed: {
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
  methods: {
    onSignin() {
      this.$store
        .dispatch("signUserIn", {
          email: this.email,
          password: this.password
        })
        .then(el => {
           this.$router.replace({ name: "publicHome" }).catch(err => {
            console.log(err);
          });
        })
        .then(el => {
          this.$router.push({ name: "privateHome" }).catch(err => {});
        })
        .catch(err => {});
    },
    onResetPassword() {
      if (this.email === "") {
        return this.$store.dispatch("setError", {
          message: "Email can not be blank"
        });
      }
      this.$store.dispatch("resetPasswordWithEmail", { email: this.email });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style lang="css" scoped>
.container {
  /* left: 60px; */
  background-image: url("https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
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
  padding: 90px 50px;
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