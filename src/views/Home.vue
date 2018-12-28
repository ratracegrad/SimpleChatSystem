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
        <div class="join-button" v-on:click="join_room">
          Join existing chat room
        </div>
        <div class="create-button" v-on:click="create_room">
          Create new chat room
        </div>
      </div>
    </div>
    <form @submit.prevent="enter" v-if="enterRoom" class="popup">
      <input type="text" placeholder="Group Name" name="groupName" autocomplete="off" v-model="groupName" />
      <button value="submit">{{ status }}</button>
    </form>
    <form @submit.prevent="login" v-if="enterName" class="popup">
      <input type="text" placeholder="Username" name="username" autocomplete="off" v-model="username" />
      <p v-if="errorText">{{ errorText }}</p>
      <button value="submit">Enter Chat</button>
    </form>
    <div id="cancel" v-if="enterRoom || enterName" v-on:click="cancel"></div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() { //Anything in the document
    return{
      username: null,
      groupName: null,
      errorText: null,
      enterName: false,
      enterRoom: false,
      status: null,
    }
  },
  methods: {
    login() {
      if (this.username){
        this.$router.push({name: 'group', params: {name: this.username}})
      } else{
        this.errorText = "Please enter a username first!"
      }
    },
    join_room() {
      this.status = "Join Room"
      this.enterRoom = true
    },
    create_room() {
      this.status = "Create Room"
      this.enterRoom = true
    },
    enter() {
      if (this.groupName){
        this.enterRoom = false
        this.enterName = true
      }
    },
    cancel() {
      this.enterRoom = false
      this.enterName = false
      this.username = null
      this.groupName = null
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
