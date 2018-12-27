<template>
  <div class="home">
    <div class="left-homepage">
      <div>
        <div>
            <svg height="28" width="28">
              <circle cx="14" cy="14" r="14" fill="#b89c3f" />
            </svg>
            <span>Find My Group</span>
          </div>
        <div>
            <svg height="28" width="28">
              <circle cx="14" cy="14" r="14" fill="#b89c3f" />
            </svg>
            <span>Create New Chat Room</span>
          </div>
        <div>
            <svg height="28" width="28">
              <circle cx="14" cy="14" r="14" fill="#b89c3f" />
            </svg>
            <span>Quickstart Guide</span>
          </div>
        <div>
            <svg height="28" width="28">
              <circle cx="14" cy="14" r="14" fill="#b89c3f" />
            </svg>
            <span>About Us</span>
          </div>
      </div>
    </div>
    <div class="right-homepage">
        <div class="right-title">
          <span>Group communcation made simple. Get productive now</span>
        </div>
        <div class="right-buttons">
          <div class="join-button">
            <a>Join existing chat room</a>
          </div>
          <div class="create-button">
            <a>Create new chat room</a>
          </div>
        </div>
        <form @submit.prevent="login">
          <input type="text" placeholder="Username" name="username" autocomplete="off" v-model="username" />
          <p v-if="errorText">{{ errorText }}</p>
          <button value="submit">Enter Chat</button>
        </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() { //Anything in the document
    return{
      username: "",
      errorText: null,
    }
  },
  methods: {
    login() {
      if (this.username){
        this.$router.push({name: 'group', params: {name: this.username}})
      } else{
        this.errorText = "Please enter a username first!"
      }
    }
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

<style src='@/assets/Home.css'>

</style>
