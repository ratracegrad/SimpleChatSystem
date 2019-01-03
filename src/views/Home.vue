<template>
  <div class="home">
    <div class="left-homepage">
      <div class="left-button">
        Quickstart Guide
      </div>
      <div class="left-button">
        About
      </div>
      <div class="frozen left-button" v-on:click="updateQuote">
        {{ frozenQuote }}
      </div>
      <div class="left-button">
        Contact
      </div>
    </div>
    <div class="right-homepage">
      <div class="right-title">
        <span>Group communcation made simple. Get productive now</span>
      </div>
      <div class="right-buttons">
        <router-link to='/rooms' class="join-button">
          <span class="button-span">Join existing chat room</span>
        </router-link>
        <router-link to='/create' class="create-button">
          <span class="button-span">Create new chat room</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      frozenQuotes: [
                       "There it is, the door you love to slam in my face!",
                       "Love is an open door!",
                       "This icy force, both foul and fair, has a frozen heart worth mining",
                       "Beware the frozen heart",
                       "Conceal don't feel, don't let them know",
                       "He's got a couple of bugs",
                       "Some people are worth melting for",
                       "The past is in the past",
                       "That perfect girl is gone",
                       "Raindeers are better than people",
                       "The heart is not so easily changed, but the head can be persuaded",
                       "You can't marry a man you just met",
                       "Somebody's gotta tell him",
                       "Love is putting someone else’s needs before yours",
                       "The hot and the cold are both so intense, but them together it just makes sense",
                       "The sky's awake, so I'm awake",
                    ],
      frozenQuote: "The sky's awake, so I'm awake",
    }
  },
  methods: {
    updateQuote() {
      var quoteNum = Math.floor(Math.random() * this.frozenQuotes.length)
      this.frozenQuote = this.frozenQuotes[quoteNum]
    }
  },
  computed: {
   // frozenQuote: function() {
   //    return frozenQuotes[this.randomNum]
   //  }
 },
 mounted() {
   this.updateQuote()
 }
};
</script>

<style>
@font-face {
  font-family: PoetsenOne;
  src: url('../assets/Fonts/PoetsenOne-Regular.ttf');
}

/* General styles */
body {
  margin: 0px;
}
.home {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  overflow: hidden;
}

/* Left page styles */
.home .left-homepage {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #333;
  height: calc(100vh - 75px);
  font-family: PoetsenOne, sans-serif;
  font-size: 28px;
  cursor: default;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 0;
}
.home .left-homepage div {
  margin-top: 28px;
}
.home .left-homepage div svg{
  padding-right: 16px;
}
.home .left-homepage div span {
  color: #e6ecf0;
  text-decoration: none;
  margin-top: 5vh;
  cursor: pointer;
}
.home .left-button {
  margin: 3%;
  padding: 2%;
  height: 38%;
  width: 40%;
  background-color: #b89c3f;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.home .frozen {
  transition-property: background-color, color, text-shadow;
  transition-duration: 600ms;

}
.home .frozen:hover {
  background-color: #3fb2b8;
  color: #e6ecf0;
  text-shadow: 0 0 8px #D32B92, 0 0 8px #D32B92, 0 0 8px #D32B92, 0 0 8px #D32B92;
}

/* Right page styles */
.home .right-homepage {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #b89c3f;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: default;
}
.home .right-homepage .right-title {
  font-family: PoetsenOne, sans-serif;
  font-size: 40px;
  color: #e6ecf0;
  margin-bottom: 30px;
}
.home .right-homepage .right-title span {
  padding: 50px;
  display: block;
  width: calc(400px + 6vw);
}
.home .right-homepage .right-buttons {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: stretch;
  font-size: 28px;
  font-family: PoetsenOne, sans-serif;
  color: #e6ecf0;
}
.home .right-homepage .right-buttons .button-span{
  color: #e6ecf0;
  text-shadow: 0 0 10px #333;
}
.home .right-homepage .right-buttons > * {
  flex-basis: 0;
  flex-grow: 1;
  border-radius: 60px;
  border: 4px solid #333;
  padding: 4px 6vw;
  margin-left: 8px;
}
.home .right-homepage .right-buttons .join-button {
  margin-bottom: 40px;
}


/* Right button animations */
.create-button, .join-button {
  user-select: none;
  background-size: 202% 100%;
  background-image: linear-gradient(to right, transparent 50%, #333 50%);
  transition: background .5s ease-in-out;
}
.create-button:hover {
  background-position: -98.1% -100%;
  cursor: pointer;
}
.join-button:hover {
  background-position: 99.9% 100%;
  cursor: pointer;
}
</style>
