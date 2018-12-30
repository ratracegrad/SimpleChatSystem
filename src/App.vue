<template>
  <div class="page">
    <div class="nav-bar">
        <div class="website-title" v-on:click="redirect">Simple</div>
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
  height: calc(100vh - 4px);
  width: 100vw;
  z-index: -1;
  margin-top: -75px;
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
.website-title {
  user-select: none;
  font-family: PoetsenOne, sans-serif;
  font-size: 50px;
  line-height: 1;
  padding-top: 10px;
  padding-bottom: 15px;
  text-align: center;
  margin: 0;
  color: #000;
  flex-grow: 2;
}
.website-title:hover {
  cursor: pointer;
}
</style>
