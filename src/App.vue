<template>
  <div class="page">
    <div class="nav-bar">
        <p class="menu"><a>Home</a></p>
        <p class="website-title"><a href="/">Simple</a></p>
        <p class="logout"><a>Logout</a></p>
    </div>
    <router-view />
    <particlesJS/>
  </div>
</template>

<script>
import particlesJS from './components/particlesJS'

export default {
  name: 'app',
  components: { particlesJS }
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
  padding-left: 5px;
  padding-right: 5px;
}
.nav-bar > * {
  flex-grow: 2;
}
.website-title {
  font-family: PoetsenOne, sans-serif;
  font-size: 50px;
  line-height: 1;
  padding-top: 10px;
  padding-bottom: 15px;
}
.website-title a {
  color: #000;
  text-decoration: none;
}
.website-title a:hover, .menu a:hover, .logout a:hover {
  cursor: pointer;
}
.nav-bar > p {
  text-align: center;
  margin: 0;
}
.nav-bar .logout {
  font-family: serif;
  align-self: center;
  text-align: left;
  font-size: 20px;
}
.nav-bar .menu {
  align-self: center;
  text-align: right;
  font-size: 20px;
}
</style>
