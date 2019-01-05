<template>
  <div class="about">
    <Particles></Particles>
    <h2>Who are we?</h2>
    <div>
      Hello, we are Ching Chang and Voovs, we are the developers of Dorpn. We are in high school and
      we love programming in our spare time. Voovs came up with the idea of the site and styled the
      main framework, while Ching Chang programmmed the backend, styled some minor components, and
      scaled the site for mobile. This is the first company we started and we really hope to make it
      simple yet useful.
    </div>
    <h2>Why Dorpn?</h2>
    <div>
      Coming up with a site name was the hardest thing of this project. When we first started the
      project, we just named our files <em>SimpleChatSystem</em> and thought that we didn't have to
      worry about the name until the site is almost done. It turned out that we finished the site in
      five days and we were at the time of coming up with a site name. We had completely no idea how
      to name our site. Ching Chang even went on a walk for more than an hour outside to search for
      inspiration. We flipped through the dictionary and tried to pull up some random words. Some
      words we came up with included Boron, Ivory, Fractals, Constant, and Inter (because inter.com
      and intercom). However, all words with the extension of .com were taken by cybersquatters. We
      had to either create new words or use more than one word. After joking about naming our site
      <em>fairisfoulfoulisfairhoverthroughthefogandfilthyair.com</em> to avoid cybersquatters, Voovs
      decided that it would be more professional to only use one word instead of using multiple
      words or phrases. The day after, Ching Chang thought that chatting with other people online is
      like talking through a door, and our site opens that door for the users. We combined the word
      door and open and called it Dorpen. Unfortunately, dorpen.com and doorpen.com are both premium
      domains which cost about $1,500 CAD, so we dropped the e and our site was born!
    </div>
  </div>
</template>

<script>
import Particles from '@/components/ParticlesJS.vue';

export default {
  name: 'about',
  components: { Particles },
};
</script>

<style scoped>
.about {
  letter-spacing: 1.5px;
  font-size: 23px;
  color: #e6ecf0;
  word-wrap: break-word;
}
</style>
