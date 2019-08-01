<template>
  <div class="main-div">
    <Particles></Particles>
    This room does not exist!
  </div>
</template>

<script>
import Particles from '@/components/ParticlesJS.vue';

export default {
  name: 'error',
  components: { Particles },
};
</script>

<style scoped>
.main-div {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 100px;
  color: #e6ecf0;
}
</style>
