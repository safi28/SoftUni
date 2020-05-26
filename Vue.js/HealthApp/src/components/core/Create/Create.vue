<template>
  <div class="background">
    <nav>
      <mainMenu></mainMenu>
    </nav>
    <div class="container">
      <div class="screen">
        <div class="screen-header">
          <div class="screen-header-left">
            <div class="screen-header-button close"></div>
            <div class="screen-header-button maximize"></div>
            <div class="screen-header-button minimize"></div>
          </div>
          <div class="screen-header-right">
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
            <div class="screen-header-ellipsis"></div>
          </div>
        </div>
        <div class="screen-body">
          <div class="screen-body-item left">
            <div class="app-title">
              <span>Create and track your</span>
              <span>Food habit</span>
            </div>
            <div class="app-contact">Track your food habit</div>
          </div>
          <div class="screen-body-item">
            <div class="app-form">
              <div class="app-form-group">
                <input class="app-form-control" placeholder="NAME" v-model="food.name" />
              </div>
              <div class="app-form-group">
                <input class="app-form-control" placeholder="g/kg" v-model="food.kg" />
              </div>
              <div class="app-form-group">
                <input
                  class="app-form-control"
                  placeholder="ingredients"
                  v-model="food.ingredients"
                />
              </div>
              <div class="app-form-group message">
                <input class="app-form-control" placeholder="details" v-model="food.details" />
              </div>
                 <div class="app-form-group">
                <input
                  class="app-form-control"
                  placeholder="image"
                  v-model="food.img"
                />
              </div>
              <div class="app-form-group buttons">
                <!-- <button class="app-form-button" @click.prevent="close">CANCEL</button> -->
                <v-spacer>
                  <v-divider class="mx-2" inset vertical></v-divider>
                </v-spacer>

                <button class="app-form-button" @click="save">CREATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="credits">
        inspired by
        <a
          class="credits-link"
          href="https://dribbble.com/shots/2666271-Contact"
          target="_blank"
        >
          <svg class="dribbble" viewBox="0 0 200 200">
            <g stroke="#ffffff" fill="none">
              <circle cx="100" cy="100" r="90" stroke-width="20" />
              <path
                d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                stroke-width="20"
              />
              <path
                d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                stroke-width="20"
              />
              <path
                d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                stroke-width="20"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import mainMenu from "@/components/core/Shared/Main.vue";
import * as firebase from "firebase/app";
import DataService from "../../../services/DataService";
import Noty from "noty";
export default {
  name: "create",
  vuetify: new Vuetify(),
  components: { mainMenu },
  data() {
    return {
      food: {
        id: null,
        name: "",
        kg: "",
        ingredients: "",
        details: "",
        img: ''
      },
      foodArr: [],
      submitted: false
    };
  },
  methods: {
    save() {
      DataService.createData("foods")
        .add({
          name: this.food.name,
          kg: this.food.kg,
          ingredients: this.food.ingredients,
          details: this.food.details,
          img: this.food.img
        })
        .then(data => {
          this.$router.replace({ name: "Food" });
        })
        .catch(err => {
          this.$noty.error("Error when creating element!");
        });
    },
    newFood() {
      this.submitted = false;
      this.food = {};
    }
  }
};
</script>

<style scoped>
@import url("./style-create.css");
</style>