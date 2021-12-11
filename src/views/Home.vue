<template>
  <main class="main">
    <div class="text">
      <div class="heading">Crickey Boi</div>
      <div class="desc">Bat, bowl, score, hit</div>
      <div class="desc2">The best cricket bot out there</div>
      <a class="desc3">Invite to your server</a>
    </div>
    <img :src="cricketer" />
  </main>
</template>

<script>
import { defineComponent } from "vue";

import cricketer from "../assets/cricketer.png";
export default defineComponent({
  name: "Home",
  data() {
    return { cricketer };
  },
});
</script>
<style lang="scss">
@import "../design/home.scss";
</style>
