<template>
  <div class="main-div">
  </div>
</template>

<script>
export default {
  name: 'Example',
  data: function(){ //Anything in the document
    return{
    }
  },
  methods: { //Normal function
  },
  computed: { //Functions with cache
  },
  props: { //Short for properties //Props are passed through when component is called
    messageHere:{
      default: "Error 404" //If no alternative value is given from parent view
    }
  },
  created () { // When page is first created

  },
  mounted () { // When page is first mounted. Step happens after everything have been loaded

  },
  destroyed () { // When current page is closed, important if you're preloading a whole site

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
