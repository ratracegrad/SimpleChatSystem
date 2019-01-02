<template>
  <div class="test-main-div">
    <p class='text' style="background-color: #76b83f; color: #e6ecf0;">Frozen Frozen Frozen #76b83f</p>
    <p class='text' style="background-color: #e6ecf0; color: #76b83f;">Frozen Frozen Frozen #76b83f</p>
    <p class='text' style="background-color: #333; color: #76b83f;">Frozen Frozen Frozen #76b83f</p>
    <p class='text' style="background-color: #76b83f; color: #333;">Frozen Frozen Frozen #76b83f</p>
    <p class='text' style="background-color: #b85f3f; color: #e6ecf0;">Frozen Frozen Frozen #b85f3f</p>
    <p class='text' style="background-color: #e6ecf0; color: #b85f3f;">Frozen Frozen Frozen #b85f3f</p>
    <p class='text' style="background-color: #333; color: #b85f3f;">Frozen Frozen Frozen #b85f3f</p>
    <p class='text' style="background-color: #b85f3f; color: #333;">Frozen Frozen Frozen #b85f3f</p>
    <p class='text' style="background-color: #813fb8; color: #e6ecf0;">Frozen Frozen Frozen #813fb8</p>
    <p class='text' style="background-color: #e6ecf0; color: #813fb8;">Frozen Frozen Frozen #813fb8</p>
    <p class='text' style="background-color: #333; color: #813fb8;">Love Is An Open Door #813fb8</p>
    <p class='text' style="background-color: #813fb8; color: #333;">Frozen Frozen Frozen #813fb8</p>
    <p class='text' style="background-color: #b89c3f; color: #e6ecf0;">Frozen Frozen Frozen #b89c3f</p>
    <p class='text' style="background-color: #e6ecf0; color: #b89c3f;">Frozen Frozen Frozen #b89c3f</p>
    <p class='text' style="background-color: #333; color: #b89c3f;">Frozen Frozen Frozen #b89c3f</p>
    <p class='text' style="background-color: #b89c3f; color: #333;">Frozen Frozen Frozen #b89c3f</p>
    <p class='text' style="background-color: #b83f75; color: #e6ecf0;">Frozen Frozen Frozen #b83f75</p>
    <p class='text' style="background-color: #e6ecf0; color: #b83f75;">Frozen Frozen Frozen #b83f75</p>
    <p class='text' style="background-color: #333; color: #b83f75;">Frozen Frozen Frozen #b83f75</p>
    <p class='text' style="background-color: #b83f75; color: #333;">Frozen Frozen Frozen #b83f75</p>
    <p class='text' style="background-color: #3fb2b8; color: #e6ecf0;">The Ocean Chose Me #3fb2b8</p>
    <p class='text' style="background-color: #e6ecf0; color: #3fb2b8;">Frozen Frozen Frozen #3fb2b8</p>
    <p class='text' style="background-color: #333; color: #3fb2b8;">Frozen Frozen Frozen #3fb2b8</p>
    <p class='text' style="background-color: #3fb2b8; color: #333;">Frozen Frozen Frozen #3fb2b8</p>
  </div>
</template>


<script>
export default {
  name: 'testBench',
  data() { // Anything in t#e6ecf0
  },
  methods: { // Normal function
  },
  computed: { // Functions with cache
  },
  props: { // Short for properties //Props are passed through when component is called
    messageHere: {
      default: 'Error 404', // If no alternative value is given from parent view
    },
  },
  created() { // When page is first created

  },
  mounted() { // When page is first mounted. Step happens after everything have been loaded

  },
  destroyed() { // When current page is closed, important if you're preloading a whole site

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: PoetsenOne;
  src: url('../assets/Fonts/PoetsenOne-Regular.ttf');
}
/* General styles */
body{
  margin: -8;
}
.test-main-div{
  margin: 0;
  padding: 0;
  background-color: #222629;
}
.text {
   margin: 0;
   font-size: 100px;
   color: #6B6E70;
   font-family: 'PoetsenOne';
}
.text::selection{
  background-color: black;
  color: white;
}
</style>
