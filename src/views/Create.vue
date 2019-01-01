<template>
  <div class="main-div">
    <form @submit.prevent="enter">
      <input type="text" placeholder="Group name" autocomplete="off" ref="focus" v-model="roomName" />
      <div v-if="errorText" class="errorText">{{ errorText }}</div>
      <input type="password" placeholder="Password" autocomplete="off" v-model="password" />
      <div v-if="passwordAlert" class="errorText">{{ passwordAlert }}</div>
      <input type="password" placeholder="Confirm your password" autocomplete="off" v-model="confirmPassword" />
      <div v-if="confirmAlert" class="errorText">{{ confirmAlert }}</div>
      <button value="submit">Create Room</button>
    </form>
    <particles></particles>
  </div>
</template>

<script>
import particles from '@/components/particlesJS.vue'

export default {
  name: 'create',
  components: { particles },
  data() {
    return {
      roomName: null,
      errorText: null,
      password: null,
      passwordAlert: null,
      confirmPassword: null,
      confirmAlert: null,
      rooms: [],
      possible: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      randomString: "",
    }
  },
  methods: {
    enter() {
      if (this.roomName && this.password && this.confirmPassword && !this.errorText && !this.passwordAlert && !this.confirmAlert) {
        for (var i = 0; i < 8; i++) {
          this.randomString += this.possible.charAt(Math.floor(Math.random() * this.possible.length))
        }
        this.$router.push({name: 'room', params: {roomName: this.roomName, randomString: this.randomString, password: this.password, created: true}})
      }
    }
  },
  mounted () {
    this.$refs.focus.focus()
  },
  updated () {
    if (this.roomName !== null) {
      if (this.roomName.length < 3) {
        this.errorText = "Your room name needs at least 3 characters"
      } else if (this.roomName.length > 20) {
        this.errorText = "Your room name is too long"
      } else {
        this.errorText = null
      }
    }
    if (this.password !== null && this.password.length < 4) {
      this.passwordAlert = "Your password must have at least 4 characters"
    } else {
      this.passwordAlert = null
    }
    if (this.confirmPassword !== this.password && this.confirmPassword !== null) {
      this.confirmAlert = "The password and confirmation password do not match"
    } else {
      this.confirmAlert = null
    }
  },
}
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
input {
  display: block;
  margin-bottom: 50px;
}
.errorText {
  margin-top: -40px;
}
</style>
