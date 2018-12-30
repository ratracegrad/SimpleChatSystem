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

<script scoped>
import fb from '@/firebase/init'
import particles from '@/components/particlesJS.vue'

export default {
  name: 'create',
  components: {particles},
  data() {
    return {
      roomName: null,
      errorText: null,
      password: null,
      passwordAlert: null,
      confirmPassword: null,
      confirmAlert: null,
      rooms: [],
    }
  },
  methods: {
    enter() {
      if (this.roomName && this.password && this.confirmPassword && !this.errorText && !this.passwordAlert && !this.confirmAlert) {
        this.$router.push({name: 'group', params: {roomName: this.roomName, password: this.password}})
      }
    }
  },
  created () {
    let ref = fb.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added" && !this.rooms.includes(change.doc.data().room)){
          this.rooms.unshift(change.doc.data().room.toLowerCase())
        }
      })
    })
  },
  mounted () {
    this.$refs.focus.focus()
  },
  updated () {
    if (this.roomName !== null) {
      if (this.rooms.includes(this.roomName.toLowerCase())) {
        this.errorText = "This room name is taken for now"
      } else if (this.roomName[0] === "-") {
        this.errorText = "You cannot start your room name with a dash"
      } else if (this.roomName[0] === "_") {
        this.errorText = "You cannot start your room name with an underscore"
      } else if (this.roomName.length < 3) {
        this.errorText = "Your room name needs at least 3 characters"
      } else if (!/[a-zA-Z\d\_-]+/g.test(this.roomName)) {
        this.errorText = "You can only have letters, numbers, dashes, and underscores in you room name"
      } else if (this.roomName.includes("--")){
        this.errorText = "You cannot have consecutive dashes in you room name"
      } else if (this.roomName.includes("__")) {
        this.errorText = "You cannot have consecutive underscore in you room name"
      } else if (this.roomName[this.roomName.length - 1] === "-") {
        this.errorText = "You cannot end your room name with a dash"
      } else if (this.roomName[this.roomName.length - 1] === "_") {
        this.errorText = "You cannot end your room name with an underscore"
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
