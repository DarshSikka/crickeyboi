<template>
  <div class="navbar">
    <img :src="ball" width="60" />
    <router-link to="/" class="bold name">Crickey boi</router-link>
    <router-link to="/commands" class="link">Commands</router-link>
    <router-link to="/leaderboard" class="link">Leaderboard</router-link>
    <router-link to="/about" class="link">About</router-link>
    <button class="btn">
      <a
        target="_blank"
        href="https://discord.com/api/oauth2/authorize?client_id=918016708114001931&permissions=8&scope=bot"
        >Get Started</a
      >
    </button>
  </div>
  <router-view />
</template>
<script>
import ball from "./assets/ball.png";
export default {
  name: "App",
  data() {
    return { ball };
  },
};
</script>
<style lang="scss">
@import "./design/navbar.scss";
body {
  margin: 0;
  overflow-x: hidden;
}
</style>
