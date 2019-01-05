<template>
  <div class="main-div">
    <form @submit.prevent="enter">
      <input ref="focus" v-model="roomName" type="text" placeholder="Room name" autocomplete="off" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <input v-model="password" type="password" placeholder="Password" autocomplete="off" />
      <div v-if="passwordAlert" class="errorText">{{ passwordAlert }}</div>
      <input v-model="confirmPassword" type="password" placeholder="Confirm your password" autocomplete="off" />
      <div v-if="confirmAlert" class="errorText">{{ confirmAlert }}</div>
      <button value="submit">Create Room</button>
    </form>
    <Particles></Particles>
  </div>
</template>

<script>
import fb from '@/firebase/init';
import Particles from '@/components/ParticlesJS.vue';

export default {
  name: 'create',
  components: { Particles },
  data() {
    return {
      roomName: null,
      errorText: null,
      password: null,
      passwordAlert: null,
      confirmPassword: null,
      confirmAlert: null,
      rooms: [],
      possible: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      randomString: '',
    };
  },
  created() {
    fb.collection('Rooms').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        this.rooms.push(change.doc.id.toLowerCase());
      });
    });
  },
  mounted() {
    this.$refs.focus.focus();
  },
  updated() {
    if (this.roomName !== null) {
      if (this.rooms.includes(this.roomName.trim().replace(/\s+/, ' ').toLowerCase())) {
        this.errorText = 'This room name is taken for now';
      } else {
        this.errorText = null;
      }
    }
    if (this.password !== null && this.password.length < 4) {
      this.passwordAlert = 'Your password must have at least 4 characters';
    } else {
      this.passwordAlert = null;
    }
    if (this.confirmPassword !== this.password && this.confirmPassword !== null) {
      this.confirmAlert = 'The password and confirmation password do not match';
    } else {
      this.confirmAlert = null;
    }
  },
  methods: {
    enter() {
      if (this.roomName.trim().replace(/\s+/, ' ') && this.password && this.confirmPassword && !this.errorText && !this.passwordAlert && !this.confirmAlert) {
        for (let i = 0; i < 6; i++) {
          this.randomString += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
        }
        this.$router.push({
          name: 'room',
          params: {
            roomName: this.roomName, randomString: this.randomString, password: this.password, created: true,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.main-div {
  margin: 0;
  padding: 0;
}
form {
  position: absolute;
  margin-left: calc(50vw - 200px);
  margin-top: calc(50vh - 75px - 150px);
}
form input {
  display: block;
  margin-bottom: 50px;
}
.errorText {
  margin-top: -40px;
}

@media (max-height: 480px) {
  form {
    margin-left: calc(50vw - 150px);
    margin-top: calc(50vh - 75px - 110px);
  }
  form input {
    font-size: 30px;
    margin-bottom: 30px;
  }
  form button {
    margin-left: 50px;
    margin-top: 25px;
  }
  .errorText {
    font-size: 14px;
    margin-top: -25px;
  }
}
@media (max-width: 350px) {
  form {
    margin-left: calc(50vw - 150px);
    margin-top: calc(50vh - 75px - 150px);
  }
  form input {
    margin-bottom: 30px;
  }
}
</style>
