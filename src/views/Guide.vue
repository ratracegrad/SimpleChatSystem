<template>
  <div>
    <Particles></Particles>
    <div class="text-portion">
      <p>
        Welcome to Dorpn. Our goal of the site is to make communication simple. Unlike the other
        texting applications, there's no need to create an account; ideal for quick texts. This site
        is especially useful to text with makeshift groups, like those created for group projects
      </p>
      <hr />
      <div class="row">
        <div class="left-text">
          <h2>Creating a Room</h2>
          <p>
            Simply go to the "create room" page, <span class="link" @click="redirectTo('create')">
            found here</span>, or on the <span class="link" @click="redirectTo('')">home page</span>.
            You'll be asked to provide a room name and password. Make sure you can give this
            password, or the URL, to your group members
          </p>
        </div>
        <video autoplay loop muted playsinline src="@/assets/create.mp4"></video>
      </div>
      <h4>Lost password and URL</h4>
      <p>
        If you do lose your password and URL, we'd strongly recommend just creating another room. If
        this, for whatever reason is not an option, send us an
        <span class="link" @click="redirectTo('contact')">email here</span>. You'll need to provide
        a rough guess for when you created the room and some messages you sent
      </p>
      <hr />
      <h2>Entering a Room</h2>
      <div class="row">
        <video autoplay loop muted playsinline src="@/assets/sendLink.mp4"></video>
        <div class="right-text">
          <h4>Using URL</h4>
          <p>
            Using a url is the most simple way of getting into your chat room. The creator, or
            anyone currently in the room, can click the "Share Room Link" button to copy the room's
            link. The link should look something like this:
          </p>
        </div>
      </div>
      <div class="link-explained">
        <span style="color: #3fb2b8;">https://www.dorpn.com/room</span><span style="color: #D32B92;">QNkvcP/</span><span style="color: #b89c3f;">1234</span>
        <hr style="margin-bottom: 5px; margin-left: -5px;" />
        <div style="color: #3fb2b8;">Common to all room links</div>
        <div style="color: #D32B92;">A random number that is unique to every room. Acts a safe
          guard. It is case sensitive, so use the exact code</div>
        <div style="color: #b89c3f;">Your room password. Also used on the join rooms page, so you
          can reference it here</div>
      </div>
      <div class="row">
        <div class="left-text">
          <h4>Join Room Page</h4>
          <p>
            This route will allow you to access your room through the name and password. Rooms are
            sorted alphabetically. Use the search bar at the top to filter through rooms by name.
            Click on you room's name and provide your room's password. Anyone already in the room
            will see the password at the end of the URL, in the address bar (explained above)
          </p>
        </div>
        <video autoplay loop muted playsinline src="@/assets/joinPage.mp4"></video>
      </div>
      <h4 style="color: #b89c3f;">Once you are in the room, remember to allow push notification to
        be notified when new messages are sent</h4>
      <hr />
      <h2>Room deletion</h2>
      <p>
        All rooms will be deleted roughly 2 weeks after their creation. If you want to keep a
        certain room open longer, or delete it prematurely,
        <span class="link" @click="redirectTo('contact')">send us an email here</span>. Expect a
        response in about 0-8 hours
      </p>
    </div>
  </div>
</template>

<script>
import Particles from '@/components/ParticlesJS.vue';

export default {
  name: 'guide',
  components: { Particles },
  methods: {
    redirectTo(path) {
      this.$router.push({ path: `/${path}` });
    },
  },
};
</script>

<style scoped>
.link {
  color: #3fb2b8;
  text-decoration: underline;
  text-decoration-color: #3fb2b8;
  cursor: pointer;
}
.link-explained {
   border: 2px solid #e6ecf0;
   margin: 30px 0px;
   padding: 10px 0px 5px 5px;
}
.text-portion {
  font-size: 23px;
  color: #e6ecf0;
  word-wrap: break-word;
  padding: 0px 4vw;
}
hr {
  border-color: #e6ecf0;
}
h5 {
  margin: 10px 0px;
}
.row {
  display: flex;
  justify-content: space-between;
  height: auto;
  margin: 15px 0px;
}
.row > * {
  flex-direction: column;
  align-self: center;
}
.row .left-text, .right-text {
  width: calc(60% - 8vw);
  float: left;
  margin-left: 4vw;
}
.row .right-text {
  width: calc(60% - 8vw);
  float: right;
  margin-right: 4vw;
  text-align: center;
}
.row video {
  width: 40%;
  border: 2px solid #e6ecf0;
}

@media (max-width: 750px) {
  .row {
    flex-direction: column;
  }
  .row .left-text, .row .right-text {
    width: calc(100% - 4vw);
    text-align: left;
  }
  .row video {
    width: calc(100% - 4px);
    flex-direction: row;
    align-self: flex-end;
  }
}
</style>
