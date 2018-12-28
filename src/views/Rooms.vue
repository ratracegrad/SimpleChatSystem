<template>
  <div class="main-div">
  </div>
</template>

<script>
export default {
  name: 'rooms',
  data() {
    return{

    }
  },
  methods: {
  },
  computed: { //Functions with cache
  },
  props: { //Short for properties //Props are passed through when component is called
    messageHere:{
      default: "Error 404" //If no alternative value is given from parent view
    }
  },
  created () {

  },
  mounted () {

  },
  destroyed () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* General styles */
.main-div{
  margin: 0;
  padding: 0;
}
</style>
