<template>
  <div class="main-div">
    <form @submit.prevent="join">
      <input type="text" placeholder="Room name" name="roomName" autocomplete="off" ref="focus" v-model="roomName" />
      <div v-if="errorText" id="errorText">{{ errorText }}</div>
      <button value="submit">Join Room</button>
    </form>
    <div v-for="room in rooms" class="room">{{ room }}</div>
  </div>
</template>

<script>
import fb from '@/firebase/init'

export default {
  name: 'rooms',
  data() {
    return {
      roomName: null,
      errorText: null,
      rooms: [],
    }
  },
  methods: {
    join() {
      if (this.roomName) {
        this.$router.push({name: 'group', params: {roomName: this.roomName}})
      } else if (this.roomName) {
        this.errorText = "This room name is taken"
      } else {
        this.errorText = "You cannot have " + " in your room name"
      }
      this.$refs.focus.focus()
    }
  },
  computed: { // Functions with cache
  },
  props: { // Short for properties // Props are passed through when component is called
    messageHere:{
      default: "Error 404" // If no alternative value is given from parent view
    }
  },
  created () {
    let ref = fb.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added"){
          this.rooms.push(change.doc.data().room)
        }
      })
    })
  },
  mounted () {
    this.$refs.focus.focus()
  },
  destroyed () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  position: relative;
  width: 100vw;
}
form input {
  padding: 0px;
  padding-left: 10px;
  height: 60px;
  width: calc(100% - 220px);
  border: 5px solid #b89c3f;
}
form button {
  display: inline;
  margin: 0px;
  float: right;
  border-radius: 0px;
}
.room {
  height: 60px;
  background-color: #3fb2b8;
  font-size: 50px;
  border-top: 5px solid #b83f75;
  border-left: 5px solid #b83f75;
  border-right: 5px solid #b83f75;
  border-bottom: 2.5px solid #b83f75;
  padding-left: 10px;
}
</style>
