<template>
  <div class="about">
    <Particles></Particles>
    <div class="main-div">
      <div class="profile">
        <h1>Ching</h1>
        <a href="mailto:chingtheprogrammer@icloud.com">chingtheprogrammer@icloud.com</a>
      </div>
      <div class="profile">
        <h1>Voovs</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Particles from '@/components/ParticlesJS.vue';

export default {
  name: 'about',
  components: { Particles },
};
</script>

<style scoped>
.main-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.profile {
  color: #333;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
</style>
