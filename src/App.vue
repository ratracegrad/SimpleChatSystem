<template>
  <div class="page">
    <div class="nav-bar">
      <div class="about-us" v-on:click="redirect"><span>About Us</span></div>
      <div class="website-title" v-on:click="redirect"><span>Simple</span></div>
      <div class="contact-us" v-on:click="redirect"><span>Contact Us</span></div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>
#particles-js {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  margin-top: -79px;
}
.page {
  width: 100%;
}
/* Navigation bar styles */
.nav-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: white;
  position: relative;
  width: 100%;
}
.nav-bar > div {
  flex-grow: 2;
}
.nav-bar > div > span {
  cursor: pointer;
}
.nav-bar .about-us {
  align-self: center;
  text-align: right;
  font-size: 20px;
}
.nav-bar .contact-us {
  font-family: serif;
  align-self: center;
  text-align: left;
  font-size: 20px;
}
.website-title {
  user-select: none;
  font-family: PoetsenOne, sans-serif;
  font-size: 50px;
  text-align: center;
  margin: 0;
  color: #000;
  padding-top: 5px;
  padding-bottom: 10px;
}
</style>
