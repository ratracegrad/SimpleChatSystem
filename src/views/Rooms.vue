<template>
  <div class="main-div">
    <particles></particles>
    <input type="text" placeholder="Search for your room here" name="roomName" autocomplete="off" ref="focus" v-model="search" />
    <div class="list-container">
      <div v-for="room in filteredRooms" class="room" v-on:click="join1(room)">{{ room }}</div>
    </div>
    <form @submit.prevent="join2" v-if="askPassword" class="popup">
      <input type="password" placeholder="Password" name="password" autocomplete="off" ref="passwordFocus" v-model="password" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <button value="submit">Join Room</button>
    </form>
    <div class="cancel" v-if="askPassword" v-on:click="cancel"></div>
  </div>
</template>

<script scoped>
import fb from '@/firebase/init'
import particles from '@/components/particlesJS.vue'

export default {
  name: 'rooms',
  components: {particles},
  data() {
    return {
      search: "",
      errorText: null,
      rooms: [],
      room: null,
      askPassword: false,
      password: null,
      iterateOnce: true,
    }
  },
  methods: {
    join1(string) {
      this.room = string
      this.askPassword = true
      this.$nextTick(() => {
        this.$refs.passwordFocus.focus()
      })
    },
    join2() {
      this.iterateOnce = true
      fb.collection('messages').orderBy('room').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added" && change.doc.data().room === this.room && this.iterateOnce) {
            if (this.password === change.doc.data().password) {
              this.$router.push({name: 'group', params: {roomName: this.room}})
            } else {
              this.errorText = "Incorrect password"
              this.$refs.passwordFocus.focus()
            }
            this.iterateOnce = false
          }
        })
      })
    },
    cancel() {
      this.askPassword = false
      this.$refs.focus.focus()
      this.password = null
    },
  },
  computed: {
    filteredRooms() {
      return this.rooms.filter(room => {
        return room.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created () {
    let ref = fb.collection('messages').orderBy('room')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added" && !this.rooms.includes(change.doc.data().room)){
          this.rooms.push(change.doc.data().room)
        }
      })
    })
  },
  mounted () {
    this.$refs.focus.focus()
  },
  updated () {
    for (var i = 0; i < document.getElementsByClassName("room").length - 1; i++) {
      document.getElementsByClassName("room")[i].style.borderBottom = "none"
    }
    document.getElementsByClassName("room")[document.getElementsByClassName("room").length - 1].style.borderBottom = "5px solid #b83f75"
  }
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
  border-top: 5px solid #b83f75;
  border-left: 5px solid #b83f75;
  border-right: 5px solid #b83f75;
  padding-left: 10px;
}
.room:hover {
  background-color: #1f9298;
  cursor: pointer;
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
