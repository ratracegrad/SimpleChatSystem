<template>
  <div class="main-div">
    <form @submit.prevent="createMessage">
      <input id="input" v-model="newMessage" type="text" name="message" placeholder="Enter Message" autocomplete="off" />
    </form>
  </div>
</template>

<script>
import fb from '@/firebase/init';

export default {
  name: 'NewMessage',
  props: ['username', 'randomString'],
  data() {
    return {
      newMessage: null,
    };
  },
  methods: {
    createMessage() {
      this.newMessage = this.newMessage.trim();
      if (this.newMessage && this.username) {
        fb.collection(this.randomString).add({
          username: this.username,
          message: this.newMessage,
          timestamp: Date.now(),
        });
        this.newMessage = null;
      }
    },
  },
};
</script>
