<template>
  <div class="about">
    <Particles></Particles>
    <div class="main-div">
      <div id="left">
        <a class="profile" href="mailto:chingtheprogrammer@icloud.com">
          <h1>Ching</h1>
          chingtheprogrammer@icloud.com
        </a>
      </div>
      <div id="right">
        <a class="profile" href="mailto:voovs13@gmail.com">
          <h1>Voovs</h1>
          voovs13@gmail.com
        </a>
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
#left, #right {
  display: flex;
  justify-content: center;
  width: 50vw;
}
.profile {
  color: #333;
  background-color: #e6ecf0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 13vh;
  width: calc(300px + 10vw);
  text-align: center;
  border-top: 6px solid #b89c3f;
  transition-duration: 0.1s;
  box-shadow: 0px 4px 6px 0px rgba(63, 178, 184, 0.3);
  transform: translateY(0px);
}
.profile:hover {
  transition-duration: 0.4s;
  box-shadow: 0px 4px 16px 0px rgba(63, 178, 184, 0.9);
  transform: translateY(-8px);
}

@media (max-width: 450px) {
  .profile {
    width: 100%;
  }
}
</style>
