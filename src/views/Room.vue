<template>
  <div class="main-div">
    <form v-if="!enterName" class="popup" @submit.prevent="login">
      <input ref="nameFocus" v-model="username" type="text" placeholder="Username" name="username" autocomplete="off" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <button value="submit">Enter Chat</button>
    </form>
    <form v-if="deletePrompt" class="popup delete" @submit.prevent="deleteRoom">
      <div class="alertText">Your messages will be deleted and this action cannot be undone. Enter the password of this room to continue</div>
      <input ref="deleteFocus" v-model="enteredPassword" type="password" placeholder="Password" name="password" autocomplete="off" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <button value="submit">Delete Room</button>
    </form>
    <div v-if="!enterName || deletePrompt" class="cancel" @click="cancel"></div>
    <div id="room-name">{{ roomName }}</div>
    <div id="room-link" @click="copy">Invitation Link</div>
    <!-- <div class="deleteButton" @click="askDelete">Delete Room</div> -->
    <div v-if="copied" id="copied-popup">Link Copied</div>
    <div id="io-box">
      <div id="output">
        <div v-for="message in messages">
          <div class="message">[{{ message.username }}]: {{ message.message }}</div>
        </div>
      </div>
      <form @submit.prevent="createMessage">
        <input id="input" ref="messageFocus" v-model="newMessage" type="text" name="message" placeholder="Enter Message" autocomplete="off" />
      </form>
    </div>
    <Particles></Particles>
  </div>
</template>

<script>
import fb from '@/firebase/init';
import Particles from '@/components/ParticlesJS.vue';

export default {
  name: 'room',
  components: { Particles },
  props: ['roomName', 'randomString', 'password', 'created'],
  data() {
    return {
      username: null,
      errorText: null,
      enterName: false,
      messages: [],
      newMessage: null,
      copied: false,
      deletePrompt: false,
      enteredPassword: null,
    };
  },
  created() {
    if (this.password && this.randomString) {
      fb.collection(this.randomString).orderBy('timestamp').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          this.messages.push({
            username: change.doc.data().username,
            message: change.doc.data().message,
            timestamp: Date.now(),
          });
          document.getElementById('output').scrollTop = document.getElementById('output').scrollHeight;
          if (change.doc.data().room) {
            this.roomName = change.doc.data().room;
          }
          if (change.doc.data().password) {
            if (this.password !== change.doc.data().password) {
              this.$router.push({ name: 'error' });
            }
          }
        });
        if (this.messages.length === 0 && !this.created) {
          this.$router.push({ name: 'error' });
        }
      });
    } else {
      this.$router.push({ name: 'error' });
    }
  },
  mounted() {
    if (localStorage.username) {
      this.username = localStorage.username;
    }
    this.$refs.nameFocus.focus();
  },
  watch: {
    messages() {
      if (this.messages[this.messages.length - 1].username === this.username) {
        this.$nextTick(() => {
          document.getElementById('output').scrollTop = document.getElementById('output').scrollHeight;
        })
      }
    }
  },
  methods: {
    login() {
      this.username = this.username.trim().replace(/\s+/, ' ');
      this.roomName = this.roomName.trim().replace(/\s+/, ' ');
      if (this.username) {
        this.enterName = true;
        localStorage.username = this.username;
        if (this.created) {
          fb.collection(this.randomString).doc('Created').set({
            username: ' System ',
            message: `${this.username} created the room`,
            timestamp: Date.now(),
            room: this.roomName,
            password: this.password,
          });
          fb.collection('Rooms').doc(this.roomName).set({
            password: this.password,
            randomString: this.randomString,
            timestamp: Date(Date.now()),
          });
        }
        this.$refs.messageFocus.focus();
      } else {
        this.errorText = 'Please enter a username first!';
        this.$refs.nameFocus.focus();
      }
    },
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
    copy() {
      const link = document.createElement('textArea');
      link.value = window.location.href;
      document.getElementById('room-link').appendChild(link);
      if (navigator.userAgent.match(/ipad|iphone|ipod/i)) {
        const range = document.createRange();
        range.selectNodeContents(link);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        link.setSelectionRange(0, 999999);
      } else {
        link.select();
      }
      document.execCommand('copy');
      document.getElementById('room-link').removeChild(link);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
    askDelete() {
      this.deletePrompt = true;
      this.$nextTick(() => {
        this.$refs.deleteFocus.focus();
      });
    },
    deleteRoom() {
      if (this.enteredPassword === this.password) {
        fb.collection(this.randomString).onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
        fb.collection('Rooms').onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id === this.roomName) {
              doc.ref.delete();
            }
          });
        });
        this.$router.push({ name: 'home' });
      } else {
        this.errorText = 'Incorrect Password';
        this.$refs.deleteFocus.focus();
      }
    },
    cancel() {
      this.deletePrompt = false;
      this.enteredPassword = null;
      this.errorText = null;
    },
  },
};
</script>

<style>
@font-face {
  font-family: PoetsenOne;
  src: url('../assets/PoetsenOne-Regular.ttf');
}
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css?family=Varela+Round');

/* General styles */
body {
  background-color: #333;
}
#io-box {
  height: 60vh;
  width: 80vw;
  position: absolute;
  top: calc(55% - 30vh);
  left: calc(50% - 40vw);
  color: #e6ecf0;
  letter-spacing: .3px;
  font-family: 'Varela Round', 'Source Sans Pro', sans-serif;
  text-justify: inter-character;
}
#io-box hr {
  margin: 0;
  border: 2px solid black;
}

/* Room name */
#room-name {
  position: absolute;
  top: calc(42.5% - 30vh);
  left: calc(50% - 40vw);
  font-size: 40px;
  font-family: PoetsenOne;
  color: #b89c3f;
  width: calc(140vw - 50%);
  overflow: hidden;
}
#room-link {
  position: absolute;
  top: calc(50% - 30vh);
  left: calc(50% - 40vw);
  font-size: 20px;
  font-family: PoetsenOne;
  color: #3fb2b8;
  cursor: pointer;
}
#room-link:hover {
  color: #0f8288;
}
#copied-popup {
  position: absolute;
  left: calc(50% - 320.5px);
  top: calc(50% - 72px);
  font-size: 120px;
  font-family: PoetsenOne;
  color: #b89c3f;
  text-shadow: 0 0 20px #333, 0 0 20px #333, 0 0 20px #333, 0 0 20px #333;
  z-index: 1;
}

/* Deleting room */
.alertText {
  position: absolute;
  margin-top: -100px;
  font-size: 22px;
  font-family: sans-serif;
  color: #b83f75;
  width: 400px;
  text-align: center;
}
.delete input {
  border-color: #b83f75;
  caret-color: #b83f75;
}
.delete button {
  background-color: #b83f75;
}
.delete button:hover {
  background-color: #880f45
}
.deleteButton {
  background-color: #b83f75;
  color: #e6ecf0;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  top: calc(50% - 30vh);
  left: calc(50% + 40vw - 98px);
  cursor: pointer;
  font-family: PoetsenOne;
}
.deleteButton:hover {
  background-color: #981f55;
  color: #c6ccd8;
}

/* Output box styles */
#output {
  height: 100%;
  display: block;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  overflow: scroll;
  word-wrap: break-word;
}
#output::-webkit-scrollbar {
  display: none;
}
.message {
  font-size: 24px;
  margin: 8px;
}

/* Input box styles */
#input {
  letter-spacing: -1px;
  font-family: 'Varela Round', 'Source Sans Pro', sans-serif;
  padding-left: 15px;
  margin-left: 6px;
  outline: none;
  margin: 0 -4px;
  border-bottom: none;
  border-top: 4px solid #b89c3f;
}
#io-box input {
  font-size: 30px;
  width: 100%;
}

/* Popup */
.popup {
  position: fixed;
  z-index: 3;
  margin-left: calc(50vw - 200px);
  margin-top: calc(50vh - 75px - 23.5px);
}
.cancel {
  top: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
  z-index: 2;
}
form input {
  caret-color: #b89c3f;
  outline-width: 0px;
  font-size: 40px;
  background: transparent;
  color: #e6ecf0;
  border: none;
  border-bottom: 5px solid #b89c3f;
}
form button {
  outline-width: 0px;
  margin-top: 40px;
  margin-left: 100px;
  padding: 0px;
  display: block;
  width: 200px;
  height: 70px;
  font-size: 28px;
  font-family: PoetsenOne;
  background-color: #b89c3f;
  color: #e6ecf0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
}
form button:hover {
  background-color: #886c0f;
  color: #b6bcc0;
}
.errorText {
  position: absolute;
  margin-top: 5px;
  color: #b83f75;
  font-family: sans-serif;
  font-size: 18px;
}

@media (max-width: 700px) {
  #copied-popup {
    font-size: 15vw;
    left: calc(50% - 40vw);
    top: calc(50% - 15vw);
  }
}
@media (max-width: 350px) {
  .popup {
    margin-left: calc(50vw - 150px);
    margin-top: calc(50vh - 75px - 100px);
  }
  form input {
    font-size: 25px;
  }
  .errorText {
    margin-top: 5px;
  }
  form button {
    margin-left: 50px;
    margin-top: 30px;
  }
  #output div {
    font-size: 15px;
  }
}
@media (max-height: 570px) {
  #io-box {
    height: 50vh;
    top: calc(55% - 20vh);
  }
  #room-name {
    top: calc(42.5% - 22vh);
  }
  #room-link {
    top: calc(50% - 20vh);
  }
}
</style>
