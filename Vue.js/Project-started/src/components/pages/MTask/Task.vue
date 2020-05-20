<template>
  <div id="app">
    <nav class="main-nav">
      <mainMenu></mainMenu>
    </nav>
    <v-app>
      <h1>Write Your Plans</h1>
      <hr />
      <v-card max-width="500">
        <v-row dense class="playlist">
          <v-dialog v-model="dialog" max-width="600px" dark>
            <template v-slot:activator="{ on }">
              <v-btn class="addbtn" color="#78244C" dark fab v-on="on">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Thing to do:</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6" sm="6" md="4">
                      <v-text-field v-model="todo.title" label="Title"></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="4">
                      <v-text-field v-model="todo.text" label="Text"></v-text-field>
                    </v-col>
                    <v-col cols="6" sm="6" md="4">
                      <v-text-field v-model="todo.img" label="Image"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click.prevent="close">Cancel</v-btn>
                <v-btn v-if="modal !== 'edit'" color="blue darken-1" text @click="save">Save</v-btn>
                <v-btn v-else color="blue darken-1" text @click="updateEdit">Edit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-row dense>
            <v-col v-for="item in tasks" :key="item.id" :class="{fade: item.isCompleted}">
              <v-card color="#000000" dark>
                <div class="d-flex">
                  <!-- #59253A -->
                  <div>
                    <v-card-title class="headline" v-text="item.title"></v-card-title>
                    <v-card-subtitle v-text="item.text"></v-card-subtitle>
                  </div>
                  <v-avatar class="ma-1" size="100" tile>
                    <v-img :src="item.img"></v-img>
                  </v-avatar>
                  <v-divider class="mx-7" inset vertical></v-divider>

                  <v-card-actions>
                    <v-btn color="white" :checked="item.update" @click="edit(item)" text>Edit</v-btn>

                    <v-btn color="white" @click="deleteItem(item.id)" text>Delete</v-btn>
                    <v-divider class="mx-6" inset vertical></v-divider>

                    <span class="checkbox-container circular-container">
                      <label class="checkbox-label">
                        <input
                          type="checkbox"
                          :checked="item.isCompleted"
                          @change="updateTodoItem(item.id, $event)"
                        />
                        <span class="checkbox-custom circular"></span>
                      </label>
                    </span>
                  </v-card-actions>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
      <v-container>
        <calendar></calendar>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import calendar from "@/components/pages/Calendar/Calendar.vue";
import mainMenu from "@/components/core/Shared/Main.vue";
import db from "@/main.js";
import * as firebase from "firebase/app";
import router from "@/router/index.js";
import Noty from "noty";
export default {
  vuetify: new Vuetify(),
  name: "meist",
  components: { mainMenu, calendar },
  data() {
    return {
      active: null,
      tasks: [],
      selected: false,
      ref: firebase.firestore().collection("tasks"),
      key: this.$route.params.id,
      todo: {
        title: "",
        text: "",
        img: ""
      },
      modal: null,
      items: [],
      dialog: false,
    };
  },
  created() {
    this.getTodos();
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    updateTodoItem(docId, e) {
      var isChecked = e.target.checked;
      firebase
        .firestore()
        .collection("tasks")
        .doc(docId)
        .update({
          isCompleted: isChecked
        })
        .then(data => {})
        .catch(err => {
          this.$noty.error("Error");
        });
    },
    edit(item) {
      this.modal = "edit";
      this.todo = item;
      this.active = item.id;
      this.dialog = true;
    },
    updateEdit() {
      firebase
        .firestore()
        .collection("tasks")
        .doc(this.active)
        .update({
          title: this.todo.title,
          text: this.todo.text,
          img: this.todo.img
        })
        .then(el => {
          this.todo.title = "";
          this.todo.text = "";
          this.modal = "";
          this.todo.img = "";
        });
      this.close();
    },
    deleteItem(item) {
      firebase
        .firestore()
        .collection("tasks")
        .doc(item)
        .delete();
    },
    close() {
      this.dialog = false;
    },
    save() {
      firebase
        .firestore()
        .collection("tasks")
        .add({
          title: this.todo.title,
          text: this.todo.text,
          createdAt: new Date().getHours(),
          isCompleted: false,
          img: this.todo.img
        })
        .then(el => {
          this.todo.title = "";
          this.todo.text = "";
          this.todo.img = "";
        })
        .catch(err => {
          this.$noty.error("Error");
        });
      this.close();
    },
    async getTodos() {
      var todosRef = await firebase.firestore().collection("tasks");
      todosRef.onSnapshot(snap => {
        this.tasks = [];
        snap.forEach(doc => {
          var todo = doc.data();
          todo.id = doc.id;
          this.tasks.push(todo);
        });
      });
    }
  }
};
</script>

<style scoped>
@import url("./styles.css");
</style>