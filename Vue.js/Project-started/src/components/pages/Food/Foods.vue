<template>
  <div id="nav">
    <nav class="main-nav">
      <mainMenu></mainMenu>
    </nav>
    <v-row dense class="r">
      <v-col
        class="text-movie-cont"
        :class="{ active: index == currentIndex }"
        v-for="food in foods"
        :key="food.id"
        @click="setActive(food.foodId)"
      >
        <div v-if="isLoading">Loading...</div>
        <div class="container">
          <div class="cellphone-container">
            <div class="movie">
              <div class="menu">
                <i class="material-icons"></i>
              </div>
              <v-img :src="food.img" class="movie-img"></v-img>

              <div class="mr-grid">
                <div class="col1">
                  <h1>{{food.name}}</h1>
                </div>
              </div>

              <div class="mr-grid summary-row">
                <div class="col2">
                  <h5></h5>
                </div>
              </div>
              <div class="mr-grid">
                <h3>Category</h3>

                <div class="col1">
                  <p class="movie-description" v-model="food.details">{{food.details}}</p>
                </div>
              </div>
              <div class="mr-grid action-row">
                <div class="col2">
                  <div class="watch-btn">
                    <button v-on:click="sendData">
                      <router-link :to="`/foods/edit/${food.id}`">
                        <h3>
                          <v-button>
                            <i class="material-icons"></i>Details
                          </v-button>
                        </h3>
                      </router-link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import AppHeader from "@/components/core/Shared/Header.vue";
import Noty from "noty";
import * as firebase from "firebase/app";
import mainMenu from "@/components/core/Shared/Main.vue";
import EventBus from "../../../eventBus";
import foodMixin from "@/mixins/food-mixin";
export default {
  name: "Foods",
  vuetify: new Vuetify(),
  components: {
    AppHeader,
    mainMenu
  },
  data() {
    return {
      foods: [],
      currentIndex: -1,
      currentFood: null,
      food: {
        id: null,
        name: "",
        kg: Number,
        ingredients: "",
        details: "",
        img: ""
      },
      retrievedFood: {
        id: null,
        name: "",
        kg: Number,
        ingredients: "",
        details: "",
        img: ""
      },
      isLoading: false
    };
  },
  created() {
    this.retrieveFood();
  },
  methods: {
    setActive(food, i) {
      this.currentIndex = i;
      this.currentFood = food;
    },
    async retrieveFood() {
      var todosRef = await firebase.firestore().collection("foods");
      todosRef.onSnapshot(snap => {
        snap.forEach(doc => {
          var todo = doc.data();
          todo.id = doc.id;
          this.foods.push(todo);
        });
      });
    
    },
    sendData() {
      const playload = {
        name: this.food.name,
        kg: this.food.kg,
        ingredients: this.food.ingredients,
        details: this.food.details,
        img: this.food.img
      };
      EventBus.$emit("DATA_PUBLISHED", playload);
    }
  },
  // mixins: [foodMixin],
  
};
</script>

<style scoped>
@import url("./style.css");
.col1,
.col2,
.col3,
.col3rest,
.col4,
.col4rest,
.col5,
.col5rest,
.col6,
.col6rest {
  margin: 8% 0.5% 0% 0.5%;
  padding: 0%;
  float: left;
  display: block;
}
</style>