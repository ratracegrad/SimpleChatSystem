<template>
  <div class="guide">
    <Particles></Particles>
    <div class="text-portion">
      <p>
        Welcome to Dorpn. Our goal of the site is to make communication simple. Unlike the other
        texting applications, there's no need to create an account; ideal for quick texts. This site is
        especially useful to text with makeshift groups, like those created for group projects
      </p>
      <h2>Creating a Room</h2>
        <p>
          Simply go to the "create room" page, <span class="link" @click="redirectTo('create')">found here</span>, or
          on the <span class="link" @click="redirectTo('home')">home page</span>. You'll be asked to provide a room name and
          password. Make sure you can give this password, or the URL, to your group members
        </p>
        <h4>Lost password and URL</h4>
          <p>
            If you do lose your password and URL, we'd strongly recommend just creating another room. If this, for whatever
            reason is not an option, send us an <span class="link" @click="redirectTo('contact')">email here</span>. You'll
            need to provide a rough guess for when you created the room and some messages you sent
          </p>
      <h2>Entering a Room</h2>
        <h4>Using URL</h4>
          <p>
            Using a url is the most simple way of getting into your chat room. The creator, or anyone
            currently in the room, can click the "Share Room link" button to copy the room's link. It
            should look something like this:
          </p>
          <div style="color: #3fb2b8;">https://dorpn.com/#/room/aLhZp8/1234</div>
            <h6><span style="color: #3fb2b8;">https://dorpn.com/#/room/</span>aLhZp8/1234</h6>
              <p>This portion is common to all room links</p>
            <h6>https://dorpn.com/#/room/<span style="color: #3fb2b8;">aLhZp8/</span>1234</h6>
              <p>
                We generate a random number, unique to every room, which acts as a sort of extra safe guard.
                It's case sensitive, so use the exact code
              </p>
            <h6>https://dorpn.com/#/room/G5WGl9BdXr/<span style="color: #3fb2b8;">1234</span></h6>
              <p>The last part is your room password. The password is also used on the join rooms page, so you can reference
              it here</p>
        <h4 @click="redirectTo('join')">Join Room Page</h4>
            <p>
              This route will allow you to access your room through the name and password. Rooms are
              sorted alphabetically. Use the search bar at the top to filter through rooms by name.
              Click on you room's name and provide your room's password. Anyone already in the
              room will see the password at the end of the URL, in the address bar (explained above)
            </p>
      <h2>Room deletion</h2>
        <p>
          All rooms will be deleted roughly 2 weeks after their creation. If you want to keep a certain
          room open longer, or delete it prematurely,
          <span class="link" @click="redirectTo('contact')">send us an email here</span>.
          Expect a response in about 4-8 hours
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
.guide {
  font-size: 23px;
  color: #e6ecf0;
  word-wrap: break-word;
}
</style>
