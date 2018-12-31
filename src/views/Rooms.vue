<template>
  <div class="main-div">
    <particles></particles>
    <input type="text" placeholder="Search for your room here" name="roomName" autocomplete="off" ref="focus" v-model="search" />
    <div v-if="match" v-on:click="showPopup" class="room">{{ match }}</div>
    <div v-else-if="search" class="notExist">This room does not exist</div>
    <form @submit.prevent="join" v-if="askPassword" class="popup">
      <input type="password" placeholder="Password" name="password" autocomplete="off" ref="passwordFocus" v-model="password" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <button value="submit">Join Room</button>
    </form>
    <div class="cancel" v-if="askPassword" v-on:click="cancel"></div>
  </div>
</template>

<script>
import fb from '@/firebase/init'
import particles from '@/components/particlesJS.vue'

export default {
  name: 'rooms',
  components: { particles },
  data() {
    return {
      search: null,
      errorText: null,
      askPassword: false,
      password: null,
    }
  },
  methods: {
    showPopup() {
      this.askPassword = true
      this.$nextTick(() => {
        this.$refs.passwordFocus.focus()
        document.getElementsByClassName("cancel")[0].style.top = document.scrollTop
      })
    },
    join() {

    },
    cancel() {
      this.askPassword = false
      this.$refs.focus.focus()
      this.password = null
    },
  },
  computed: {
    match() {
      try {
        // if this.search can be found as a collection
        // return the room name
      } catch (e) {
        return null
      }
    }
  },
  mounted () {
    this.$refs.focus.focus()
  },
}
</script>

<style scoped>
input {
  caret-color: #b89c3f;
  font-size: 40px;
  background: transparent;
  color: #e6ecf0;
  outline-width: 0px;
  width: calc(100vw - 20px);
  padding: 0px;
  padding-left: 10px;
  height: 60px;
  border: 5px solid #b89c3f;
}
.room {
  height: 60px;
  background-color: #3fb2b8;
  font-size: 50px;
  border: 5px solid #b89c3f;
  padding-left: 10px;
}
.room:hover {
  background-color: #1f9298;
  cursor: pointer;
}
.notExist {
  font-size: 100px;
  color: #e6ecf0;
  margin-top: 50px;
  margin-left: 15px;
}
form input {
  padding: 0px;
  border: none;
  border-bottom: 5px solid #b89c3f;
  width: 400px;
}
.popup {
  top: 0px;
}
</style>
