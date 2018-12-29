<template>
  <div class="main-div">
    <input type="text" placeholder="Search for your room here" name="roomName" autocomplete="off" ref="focus" v-model="roomName" />
    <div v-for="room in filteredRooms" class="room" v-on:click="join(room)">{{ room }}</div>
  </div>
</template>

<script>
import fb from '@/firebase/init'

export default {
  name: 'rooms',
  data() {
    return {
      roomName: "",
      errorText: null,
      rooms: [],
    }
  },
  methods: {
    join(string) {
      this.$router.push({name: 'group', params: {roomName: string}})
    }
  },
  computed: { // Functions with cache
    filteredRooms() {
      return this.rooms.filter(room => {
        return room.toLowerCase().includes(this.roomName.toLowerCase())
      })
    }
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
        if (change.type === "added" && !this.rooms.includes(change.doc.data().room)){
          this.rooms.unshift(change.doc.data().room)
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
</style>
