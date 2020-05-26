<template>
  <div class="main">
    <HeaderUnL></HeaderUnL>
    <div class="app">
     <section class="section section-top">
			<div class="content rellax" data-rellax-speed="5">
				<h1>Online Health App</h1>
        <h1>Pay Attention to your Health</h1>
				<a class="btn btn-primary">Learn More</a>
			</div>
		</section>

		<section class="section section-stream">
			<img
				class="play rellax"
				src="https://i.ibb.co/TvdbMhQ/play-button.png"
				alt=""
				data-rellax-speed="-1" data-rellax-xs-speed="-5"
			/>
			<div class="content rellax" data-rellax-speed="10">
				<div>
					<h2 class="secondary-text">Track your results</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
				<div>
					<h2 class="secondary-text">Plan your daily tasks</h2 class="secondary-text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
			</div>
		</section>

    </div>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import HeaderUnL from "@/components/core/Shared/HeaderUnL.vue";
export default {
  name: "publicHome",
  props: {
    isAuth: Boolean
  },
  vuetify: new Vuetify(),
  components: {
    HeaderUnL
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

:root {
	--primary-color: #2d2254;
	--secondary--color: #181716;
	--text-color: #0e0e0f;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: 'Montserrat', sans-serif;
	background: var(--primary-color);
	color: #fff;
	font-size: 18px;
	line-height: 1.6;
}

h1,
h2,
h3,
p {
	margin-bottom: 10px;
}

a {
	text-decoration: none;
	color: rgb(22, 20, 20);
}

ul {
	list-style: none;
}

.btn {
	display: inline-block;
	border: 0;
	background: var(--secondary--color);
	color: rgb(2, 2, 2);
	border-radius: 20px;
	padding: 8px 30px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 16px;
	margin-top: 10px;
}

.btn:hover {
	transform: scale(0.98);
}

.primary-text {
	color: var(--primary-color);
}

.secondary-text {
	color: var(--secondary--color);
}

.section {
	position: relative;
	padding: 0 20px;
}

/* Section Top */
.section-top {
	min-height: 500px;
	background: url('https://i.pinimg.com/originals/57/06/13/5706134dde5164d7195bcc13363384db.jpg') no-repeat center center/cover;
}

.section-top h1 {
	font-size: 70px;
	line-height: 1.3;
}

.section-top .content {
	position: absolute;
	top: 100px;
	right: 20px;
	width: 55%;
}

/* Section Stream */
.section-stream {
	min-height: 700px;
	background: url('https://wallpaperaccess.com/full/749804.jpg') no-repeat center center/cover;
}

.section-stream h2 {
	font-size: 35px;
}

.section-stream .play {
	width: 27%;
	position: absolute;
	top: 100px;
	left: 50px;
}

.section-stream .content {
	position: absolute;
	width: 50%;
	top: 130px;
	right: 70px;
}

.section-stream .content > div, .section-grid > div {
	background: rgba(255, 255, 255, 0.1);
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
}

/* Section Grid */
.section-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 30px;
	text-align: center;
}

.section-grid p {
	color: var(--text-color);
}

.section-grid .dot {
	font-size: 40px;
	padding-left: 2px;
}

/* Footer */
.footer {
	border-top: var(--text-color) 1px solid;
	padding: 30px;
	margin-top: 20px;
}

.footer ul {
	display: flex;
	align-items: center;
	justify-content: space-around;
	text-align: center;
}

/* Mobile */
@media (max-width: 700px) {
	.section-top .content,
	.section-stream .play,
	.section-stream .content {
		position: static;
		width: 100%;
	}

	.section-top {
		min-height: 200px;
		padding-top: 20px;
	}

	.section-top .content {
		text-align: center;
	}

	.section-top .content h1 {
		font-size: 45px;
	}

	.section-stream {
		min-height: 400px;
	}

	.section-stream .play {
		width: 50%;
		display: block;
		margin: 30px auto;
	}

	.section-grid {
		display: block;
		margin-top: 0;
	}

	.footer ul {
		display: block;
	}
}

.main {
  background-image: linear-gradient(
      to top right,
      rgba(97, 116, 223, 0.7),
      rgba(25, 32, 72, 0.7)
    ),
    url("https://i.pinimg.com/736x/68/46/10/684610d7617668e4c68c19431a4f338f.jpg");
}
.grey {
  background-size: cover;
}
.auth {
  color: rgb(14, 13, 13);
}
</style>