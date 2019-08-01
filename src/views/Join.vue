<template>
  <div class="main-div">
    <Particles></Particles>
    <input ref="focus" v-model="search" type="text" placeholder="Search for your room here" name="roomName" autocomplete="off" />
    <div v-for="(match, index) in rooms.filter(room => room.toLowerCase().includes(search.toLowerCase()))" class="room" :class="buttonClass(index)" @click="showPopup(match)">{{ match }}</div>
    <form v-if="askPassword" class="popup" @submit.prevent="join">
      <input ref="passwordFocus" v-model="password" type="password" placeholder="Password" name="password" autocomplete="off" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <button value="submit">Join Room</button>
    </form>
    <div v-if="askPassword" class="cancel" @click="cancel"></div>
  </div>
</template>

<script>
import fb from '@/firebase/init';
import Particles from '@/components/ParticlesJS.vue';

export default {
  name: 'join',
  components: { Particles },
  data() {
    return {
      search: '',
      errorText: null,
      askPassword: false,
      password: null,
      room: null,
      rooms: [],
      randomNum: 0,
    };
  },
  created() {
    fb.collection('Rooms').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        this.rooms.push(change.doc.id);
      });
    });
    this.randomNum = Math.floor(Math.random() * 3);
  },
  mounted() {
    this.$refs.focus.focus();
  },
  methods: {
    buttonClass(index) {
      return `button${(index + this.randomNum) % 4}`;
    },
    showPopup(room) {
      this.room = room;
      this.askPassword = true;
      this.$nextTick(() => {
        this.$refs.passwordFocus.focus();
        document.getElementsByClassName('cancel')[0].style.top = document.scrollTop;
      });
    },
    join() {
      fb.collection('Rooms').onSnapshot((snapshot) => {
        if (this.password === snapshot.docChanges()[this.rooms.indexOf(this.room)].doc.data().password) {
          this.$router.push({ name: 'room', params: { randomString: snapshot.docChanges()[this.rooms.indexOf(this.room)].doc.data().randomString, password: this.password } });
        } else {
          this.errorText = 'Incorrect password';
        }
      });
    },
    cancel() {
      this.askPassword = false;
      this.password = null;
      this.errorText = null;
      this.$refs.focus.focus();
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css?family=Varela+Round');

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
  color: #e6ecf0;
  font-family: 'Varela Round', 'Source Sans Pro';
  overflow: hidden;
  width: 95%;
  height: auto;
  background-color: transparent;
  font-size: calc(2px + 4vw);
  border-radius: 60px;
  margin: 6px;
  padding-left: 10px;
  text-decoration: underline;
}
.button0 {
  text-decoration-color: #76b83f;
}
.button1 {
  text-decoration-color: #813fb8;
}
.button2 {
  text-decoration-color: #b83f75;
}
.button3 {
  text-decoration-color: #b85f3f;
}
.button0:hover {
  background-color: #76b83f;
}
.button1:hover {
  background-color: #813fb8;
}
.button2:hover {
  background-color: #b83f75;
}
.button3:hover {
  background-color: #b85f3f;
}
.room:hover {
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
