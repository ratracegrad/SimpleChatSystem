<template>
  <div>
    <form v-on:submit.prevent="login" v-if="!enterName" class="popup">
      <input type="text" placeholder="Username" name="username" autocomplete="off" ref="focus" v-model="username" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <button value="submit">Enter Chat</button>
    </form>
    <div class="cancel" v-if="!enterName"></div>
    <div id="room-name">Room: {{ roomName }}</div>
    <div id="room-link" v-on:click="copy">Invitation Link</div>
    <div v-if="copied" id="copied-popup">Link Copied</div>
    <div id="io-box">
      <div id="output">
        <div v-for="message in messages">
          <div class="message">[{{ message.username }}]: {{ message.message }}</div>
        </div>
      </div>
      <hr>
      <NewMessage :username="username" :randomString="randomString"></NewMessage>
    </div>
    <particles></particles>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import fb from '@/firebase/init'
import particles from '@/components/particlesJS.vue'

export default {
  name: 'room',
  props: ['roomName', 'randomString', 'password', 'created'],
  components: { particles, NewMessage },
  data() {
    return {
      username: null,
      errorText: null,
      enterName: false,
      messages: [],
      copied: false,
    }
  },
  methods: {
    login() {
      this.username = this.username.trim().replace(/\s+/, " ")
      if (this.username) {
        this.enterName = true
        if (this.created) {
          fb.collection(this.randomString).doc("Created").set({
            username: "   System   ",
            message: this.username + " created the room",
            timestamp: Date.now(),
            room: this.roomName,
            password: this.password,
          })
          fb.collection("Rooms").doc(this.roomName).set({
            password: this.password,
            randomString: this.randomString,
          })
        }
      } else {
        this.errorText = "Please enter a username first!"
      }
      this.$refs.focus.focus()
    },
    copy() {
      const link = document.createElement("input")
      link.value = window.location.href
      document.getElementById("room-link").appendChild(link)
      link.select()
      document.execCommand("copy")
      document.getElementById("room-link").removeChild(link)
      this.copied = true
      setTimeout(function() {
        this.copied = false
      }.bind(this), 600)
    }
  },
  created() {
    if (this.password && this.randomString) {
      fb.collection(this.randomString).orderBy('timestamp').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          this.messages.push({
            username: change.doc.data().username,
            message: change.doc.data().message,
            timestamp: Date.now(),
          })
          if (change.doc.data().room) {
            this.roomName = change.doc.data().room
          }
          if (change.doc.data().password) {
            if (this.password !== change.doc.data().password) {
              this.$router.push({name: 'error'})
            }
          }
        })
        if (this.messages.length === 0 && !this.created) {
          this.$router.push({name: 'error'})
        }
      })
    } else {
      this.$router.push({name: 'error'})
    }
    try {
      document.getElementById("output").scrollTop = document.getElementById("output").scrollHeight
    } catch(TypeError){
    }
  },
  mounted() {
    this.$refs.focus.focus()
  },
  updated() {
    try {
      document.getElementById("output").scrollTop = document.getElementById("output").scrollHeight
    } catch(TypeError){
    }
  },
}
</script>

<style>
@font-face {
  font-family: PoetsenOne;
  src: url('../assets/Fonts/PoetsenOne-Regular.ttf');
}
@font-face {
  font-family: YT_font;
  src: url('../assets/Fonts/YT_font.ttf');
}

/* General styles */
body {
  background-color: #333;
}
#io-box {
  border: 4px solid red;
  height: 60vh;
  width: 80vw;
  position: absolute;
  top: calc(55% - 30vh);
  left: calc(50% - 40vw);
  color: #e6ecf0;
  font-family: YT_font, sans-serif;
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
  color: #76b83f;
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
  color: #3fb2b8;
  z-index: 1;
}

/* Output box styles */
#output {
  height: 100%;
  display: block;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  overflow: auto;
}

/* Messages style */
.message {
  font-size: 24px;
  margin: 8px;
}

/* Input box styles */
#input {
  outline: none;
  border: 4px solid green;
  margin: 0 -4px;
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
</style>
