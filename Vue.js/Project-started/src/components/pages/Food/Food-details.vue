<template>
  <div id="app">
    <nav class="main-nav">
      <mainMenu></mainMenu>
    </nav>
    <v-app class="all">
      <div class="container">
        <v-dialog v-model="dialog" max-width="600px" dark>
          <v-card>
            <v-card-title>
              <span class="headline">Wanna update your meal?</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6" sm="6" md="4">
                    <v-text-field v-model="food.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" md="4">
                    <v-text-field v-model="food.kg" label="KG"></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" md="4">
                    <v-text-field v-model="food.img" label="Image"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="update">Edit</v-btn>
              <v-btn color="blue darken-1" text @click.prevent="close">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div class="cellphone-container">
          <div class="movie">
            <div class="menu">
              <i class="material-icons"></i>
            </div>
            <v-img class="movie-img" :src="food.img"></v-img>
            <div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>{{food.name}}</h1>
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5>Details</h5>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description" v-model="food.details">{{food.details}}</p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors" v-model="food.ingredients">{{food.ingredients}}</p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors" v-model="food.kg">{{food.kg}}g</p>
                  </div>
                </div>
                <div class="mr-grid action-row">
                  <div class="col2">
                    <div class="watch-btn">
                      <v-row>
                        <v-col>
                          <button :checked="food.update" @click="updateData(food)">
                            <h3>
                              <i class="material-icons"></i>Edit
                            </h3>
                          </button>
                        </v-col>
                      </v-row>
                      <v-row></v-row>
                    </div>
                  </div>
                  <div class="col2">
                    <div class="watch-btn">
                      <v-row>
                        <v-col>
                          <button @click="deleteData()">
                            <h3>
                              <i class="material-icons"></i>Delete
                            </h3>
                          </button>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import Noty from "noty";
import * as firebase from "firebase/app";
import mainMenu from "@/components/core/Shared/Main.vue";
import EventBus from "../../../eventBus";
import foodMixin from "@/mixins/food-mixin";
export default {
  name: "foods",
  vuetify: new Vuetify(),
  components: {
    mainMenu
  },
  data() {
    return {
      //foods: [],
      currentIndex: -1,
      currentFood: null,
      dialog: false,
      food: {
        id: null,
        name: "",
        kg: Number,
        ingredients: "",
        details: "",
        img: ""
      },
      id: null,
      active: null
    };
  },
  mixins: [foodMixin],
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.retrieveFood();
  },
  methods: {
    // retrieveFood() {
    //   firebase
    //     .firestore()
    //     .collection("foods")
    //     .doc(this.$route.params.id)
    //     .get()
    //     .then(el => {
    //       this.food = el.data();
    //     });
    // },
    setActive(food, i) {
      this.currentIndex = i;
      this.currentFood = food;
    },
    close() {
      this.dialog = false;
    },
    updateData(playload) {
      this.dialog = true;
      this.food = playload;
      this.active = playload.id;
    },
    update() {
      firebase
        .firestore()
        .collection("foods")
        .doc(this.$route.params.id)
        .update({
          name: this.food.name,
          kg: this.food.kg,
          ingredients: this.food.ingredients,
          details: this.food.details,
          img: this.food.img
        })
        .then(el => {
          this.$noty.success("Edit completed!");
        });
      this.close();
    },
    deleteData() {
      firebase
        .firestore()
        .collection("foods")
        .doc(this.$route.params.id)
        .delete()
        .then(el => {
          this.$router.replace({ name: "Food" });
        });
    }
  },
  mounted() {
    EventBus.$on("DATA_PUBLISHED", playload => {
      this.updateData(playload);
    });
  }
};
</script>

<style scoped>
@import url("./style.css");
#app {
  background-image: linear-gradient(
      to top right,
      rgba(30, 52, 177, 0.171),
      rgba(25, 36, 97, 0.322)
    ),
    url("https://images.pexels.com/photos/1119793/pexels-photo-1119793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
</style>