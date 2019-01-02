<template>
  <div class="home">
    <div class="left-homepage">
      <div>
        <div>
          <svg height="28" width="28">
            <circle cx="14" cy="14" r="14" fill="#b89c3f" />
          </svg>
          <span>No Registration Needed</span>
        </div>
        <div>
          <svg height="28" width="28">
            <circle cx="14" cy="14" r="14" fill="#b89c3f" />
          </svg>
          <span @click="join">Find My Group</span>
        </div>
        <div>
          <svg height="28" width="28">
            <circle cx="14" cy="14" r="14" fill="#b89c3f" />
          </svg>
          <span @click="create">Create New Chat Room</span>
        </div>
        <div>
          <svg height="28" width="28">
            <circle cx="14" cy="14" r="14" fill="#b89c3f" />
          </svg>
          <span @click="guide">Quickstart Guide</span>
        </div>
        <div>
          <svg height="28" width="28">
            <circle cx="14" cy="14" r="14" fill="#b89c3f" />
          </svg>
          <span>About Us</span>
        </div>
      </div>
    </div>
    <div class="right-homepage">
      <div class="right-title">
        <span>Group communcation made simple. Get productive now</span>
      </div>
      <div class="right-buttons">
        <div class="join-button" @click="join">
          Join existing chat room
        </div>
        <div class="create-button" @click="create">
          Create new chat room
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    join() {
      this.$router.push({ name: 'rooms' });
    },
    create() {
      this.$router.push({ name: 'create' });
    },
    guide() {
      this.$router.push({ name: 'guide' });
    },
  },
};
</script>

<style>
@font-face {
  font-family: PoetsenOne;
  src: url('../assets/Fonts/PoetsenOne-Regular.ttf');
}

/* General styles */
body {
  margin: 0px;
}
.home {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
}

/* Left page styles */
.home .left-homepage {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #333;
  height: calc(100vh - 75px);
  font-family: PoetsenOne, sans-serif;
  font-size: 28px;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
}
.home .left-homepage div {
  margin-top: 28px;
}
.home .left-homepage div svg{
  padding-right: 16px;
}
.home .left-homepage div span {
  color: #e6ecf0;
  text-decoration: none;
  margin-top: 5vh;
  cursor: pointer;
}

/* Right page styles */
.home .right-homepage {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #b89c3f;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: default;
}
.home .right-homepage .right-title {
  font-family: PoetsenOne, sans-serif;
  font-size: 40px;
  color: #e6ecf0;
  margin-bottom: 30px;
}
.home .right-homepage .right-title span {
  padding: 50px;
  display: block;
  width: calc(400px + 6vw);
}
.home .right-homepage .right-buttons {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: stretch;
  font-size: 28px;
  font-family: PoetsenOne, sans-serif;
  color: #e6ecf0;
}
.home .right-homepage .right-buttons > * {
  flex-basis: 0;
  flex-grow: 1;
  border-radius: 60px;
  border: 4px solid #333;
  padding: 4px 6vw;
  margin-left: 8px;
}
.home .right-homepage .right-buttons .join-button {
  margin-bottom: 40px;
}
.join-button a, .create-button a {
  text-shadow: 0 0 10px #333;
}

/* Right button animations */
.create-button, .join-button {
  user-select: none;
  background-size: 202% 100%;
  background-image: linear-gradient(to right, transparent 50%, #333 50%);
  transition: background .5s ease-in-out;
}
.create-button:hover {
  background-position: -98.1% -100%;
  cursor: pointer;
}
.join-button:hover {
  background-position: 99.9% 100%;
  cursor: pointer;
}
</style>
