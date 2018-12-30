<template>
  <div class="main-div">
    <form @submit.prevent="createMessage">
      <input id="input" type="text" name="message" placeholder="Enter Message" autocomplete="off" v-model="newMessage" />
    </form>
  </div>
</template>

<script>
import fb from '@/firebase/init'

export default {
  name: 'NewMessage',
  props: ['username', 'roomName'],
  data() {
    return{
      newMessage: null,
    }
  },
  methods: {
    createMessage() {
      if (this.newMessage && this.username){
        fb.collection('messages').add({
          room: this.roomName,
          username: this.username,
          message: this.newMessage,
          timestamp: Date.now(),
        })
        this.newMessage = null
      }
    }
  }
}
</script>
