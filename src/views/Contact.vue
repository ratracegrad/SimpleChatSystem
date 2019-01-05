<template>
  <div class="about">
    <Particles></Particles>
    <div class="main-div">
      <div class="profile">
        <h1>Ching</h1>
        chingtheprogrammer@icloud.com
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

<style scope>
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
}
</style>
