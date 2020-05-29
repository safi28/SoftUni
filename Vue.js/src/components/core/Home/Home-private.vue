<template>
  <div class="k">
    <headerLoad></headerLoad>
    <section class="hero">
      <div class="overlay">
        <div class="content">
          <h1>
            Health
            <br />care.
          </h1>
          <p>We are creating healthy diets for you based on your manners!!</p>
        </div>
      </div>
      <div>
        <router-link :to="{name: 'Mood'}">
          <button class="c-smileyButton">
            <div class="c-smileyButton__hoverListener"></div>
            <div class="c-smileyButton__hoverListener"></div>
            <span class="c-smileyButton__face"></span>
            &nbsp;GET STARTED 
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import headerLoad from "@/components/core/Shared/Header.vue";
export default {
  name: "dashboard",
  components: { headerLoad },
  methods: {
    
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,400,800,900&display=swap");
body {
  margin: 0;
  padding: 0;
  background: #333;
  justify-content: center;
}

.c-smileyButton {
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #ffffff;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 2.5em;
  left: 650px;
  top: 170px;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  box-sizing: border-box;
  background-color: #e0acf7;
  box-shadow: 0 0.15em 1em rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.c-smileyButton:hover .c-smileyButton__face::before {
  content: "\1F618";
  animation: animate 1.05s infinite;
}
.c-smileyButton::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
}

.c-smileyButton__face::before {
  content: "\1F614";
}

.c-smileyButton__hoverListener {
  position: absolute;
  cursor: default;
  z-index: -1;
}
.c-smileyButton__hoverListener:hover ~ .c-smileyButton__face::before {
  animation: none;
}
.c-smileyButton__hoverListener:nth-child(1) {
  width: 290%;
  height: 550%;
}
.c-smileyButton__hoverListener:nth-child(1):hover
  ~ .c-smileyButton__face::before {
  content: "\1F60C";
}
.c-smileyButton__hoverListener:nth-child(2) {
  width: 190%;
  height: 330%;
}
.c-smileyButton__hoverListener:nth-child(2):hover
  ~ .c-smileyButton__face::before {
  content: "\1F61A";
}

@keyframes animate {
  100% {
    content: "\1F60A";
  }
}

.hero {
  background: #133a53
    url("https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  /* background: url(""); */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  width: 100vw;
}
.hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.hero .overlay .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 70vw;

  margin: auto;
  transform-origin: left;
  animation: reveal 1s ease-in-out forwards;
}
.hero .overlay .content h1 {
  font-size: 90px;
  line-height: 0.9;
  margin-bottom: 10px;
  color: white;
  /* left: 200%; */
  right: 70%;
}
.hero .overlay .content p {
  font-size: 24px;
  color: white;
  right: 29px;
}
.hero .overlay:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ff6700;
  z-index: 3;
  animation: reveal 0.5s reverse forwards;
  animation-delay: 0.5s;
  transform-origin: left;
}
.hero .overlay:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #133a53;
  z-index: 2;
  animation: reveal 0.7s reverse forwards;
  animation-delay: 0.7s;
  transform-origin: left;
}

@keyframes reveal {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>