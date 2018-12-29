<template>
  <div class="page">
    <div class="nav-bar">
        <div class="website-title" v-on:click="redirect">Simple</div>
    </div>
    <router-view />
  </div>
</template>

<script>
import particlesJS from './components/particlesJS'

export default {
  name: 'app',
  components: { particlesJS },
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style scoped>
.page {
  width: 100%;
}
/* Navigation bar styles */
.nav-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ;
  background-color: white;
  position: sticky;
  top: 0px;
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
