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
  props: ['name'],
  data() {
    return{
      newMessage: null,
    }
  },
  methods: {
    createMessage() {
      if (this.newMessage){
        fb.collection('messages').add({
          message: this.newMessage,
          username: this.name,
          timestamp: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.newMessage = null
      }
    }
  }
}
</script>
