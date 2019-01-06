<template>
  <div class="guide">
    <Particles></Particles>
    <div>
      Welcome to Dorpn. Our goal of the site is to make communication simple. Unlike the other
      chatting applications nowadays, you do not need to register for an account nor to keep track
      of the friends you have on this site. This site is espcially designed for situations when you
      need to work with new people for a small project, but are not close enough to add each other
      on whatever chatting application you use.
    </div>
    <h2>Creating a Room</h2>
    <h3>Getting Members</h3>
    <div>
      To create a room, simply go to the home page and click on "Create new chat room". Once you are
      in there, enter your desire room name and a password. Your room name might be taken, but a
      room only lasts for 2 weeks or less, unless the user asks for an extension. Therefore, the
      room name that is not available at the moment might be available the next time you visit
      Dorpn.
    </div>
    <h2>Entering a Room</h2>
    <h4>Using URL</h4>
    <p>
      Using a url is the most simple way of getting into your chat room. The creator, or anyone
      currently in the room, can click the "Invitation link" button to copy the rooms link. It
      should look something like this:
    </p>
    <div>https://dorpn.com/#/room/G5WGl9BdXr/1234</div>
    <h6><span style="color: #b89c3f;">https://dorpn.com/#/room/</span>G5WGl9BdXr/1234</h6>
    <p>This portion is common to all room links</p>
    <h6>https://dorpn.com/#/room/<span style="color: #b89c3f;">G5WGl9BdXr/</span>1234</h6>
    <p>
      We generate a random number, unique to every room, which acts as a sort of extra safe guard.
      It's case sensitive, so use the exact code
    </p>
    <h6>https://dorpn.com/#/room/G5WGl9BdXr/<span style="color: #b89c3f;">1234</span></h6>
    <p>The last part is your room password. The password is also used on the join rooms page</p>
    <h4 @click="redirectTo('join')">Join Rooms Page</h4>
    <p>
      This route will allow you to access your room by konwing the name and password. Rooms are
      sorted alphabetically, while the search bar will find any room name matching the given
      characters. Click on you room's name and provide your room's password. Anyone already in the
      room will see the password at the end of the URL, in the address bar
    </p>
    <h2>Room deletion</h2>
    <p>
      All rooms will be deleted roughly 2 weeks after their creation. If you want to keep a certain
      room open longer, or delete it prematurely,
      <span style="color: #3fb2b8; cursor: pointer;" @click="redirectTo('contact')">send us an email
      here</span>. Expect a response in about 0-8 hours
    </p>
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
.guide {
  font-size: 23px;
  color: #e6ecf0;
  word-wrap: break-word;
}
</style>
