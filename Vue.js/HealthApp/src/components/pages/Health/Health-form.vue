<template>
  <div class="klas">
    <mainMenu></mainMenu>
    <div v-if="high">
      <v-alert
        v-model="alert"
        dismissible
        color="cyan"
        border="left"
        elevation="3"
        :icon="icons.check"
        class="alert"
      >
        You've got
        <strong>{{points}}</strong> points. Your health results are ok!
      </v-alert>
    </div>
    <div v-if="low">
      <v-alert
        v-model="alert"
        dismissible
        color="cyan"
        border="left"
        elevation="3"
        :icon="icons.fail"
        class="alert"
      >
        You've got only
        <strong>{{points}}</strong> you need to pay more attention to your daily food meals and movements!
      </v-alert>
    </div>
    <section class="hero">
      <div class="container">
        <h1>Questions</h1>

        <div id="questionArea" v-if="questions.length &gt; 0">
          <p id="questionDisplay">{{questions[index].question}}</p>
          <div
            for="radio-1"
            class="option"
            id="possibleAnswersDisplay"
            v-for="pa in questions[index].possibleAnswers"
          >
            <label for="silver" aria-label="Silver">
              <input
                name="card"
                id="silver"
                value="silver"
                type="radio"
                checked
                v-model="userAnswer"
                v-bind:value="pa"
              />
              <span></span>
              {{pa}}
            </label>
          </div>
          <br />
          <button class="btn btn-block btn-primary" id="finalAnswer" @click="checkAnswer">Send</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import Json from "../../../../public/Health-questions.json";
import { mdiCheckboxMarkedCircle, mdiMessageAlert } from "@mdi/js";
import mainMenu from "@/components/core/Shared/Main.vue";
export default {
  name: "Health",
  components: { mainMenu },
  data() {
    return {
      message: "",
      userInfo: { userName: "A" },
      userScore: 0,
      questions: [],
      index: 0,
      userAnswer: "",
      baseUrl: Json,
      high: false,
      low: false,
      alert: false,
      icons: {
        check: mdiCheckboxMarkedCircle,
        fail: mdiMessageAlert
      },
      points: ""
    };
  },
  ready() {
    console.log("ready");
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get("Health-questions.json").then(json => {
        this.questions.push(...json.data);
      });
    },
    checkAnswer() {
      if (this.userAnswer == this.questions[this.index].correctAnswer) {
        this.userScore++;
      }
      this.updateIndex();
    },
    updateIndex() {
      if (this.index < this.questions.length - 1) {
        this.index++;
      } else {
        this.displayResults();
      }
    },
    displayResults() {
      if (parseInt(this.userScore) / this.questions.length > 0.7) {
        this.high = true;
        this.alert = true;
        this.low = false;
        this.points = this.userScore;
      } else {
        this.high = false;
        this.alert = true;
        this.low = true;
        this.points = this.userScore;
      }
      this.restartQuiz();
    },
    restartQuiz: function() {
      this.userScore = 0;
      this.index = 0;
    }
  }
};
</script>

<style scoped>
html,
body {
  font-family: "Muli", sans-serif;
  background-color: #272936;
  color: #a6a8b6;
}
.alert {
  width: 50%;
  left: 25%;
  top: 50%;
  color: rgb(190, 30, 150);
}
.card {
  width: 50%;
}
h1 {
  padding: 15px;
}
.container {
  color: white;
}
.hero {
  background: #133a53
    url("https://images.pexels.com/photos/2014691/pexels-photo-2014691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  /* background: url(""); */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  width: 100vw;
}
.container {
  background-color: black;

  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
}
</style>