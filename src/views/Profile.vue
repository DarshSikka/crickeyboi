<template>
  <div className="user">
    <img :src="user?.displayAvatarURL" />
    <h1>User: {{ user?.tag }}</h1>
    <h2>Level: {{ user?.level }}</h2>
    <input
      type="range"
      min="0"
      :max="lvlToXp(user?.level)"
      :value="user?.xp"
      disabled
    />
    <h3>{{ user?.xp }}/{{ lvlToXp(user?.level) }} xp</h3>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Profile",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    lvlToXp(lvl) {
      const farenheit = lvl * 1.8 + 232;
      return Math.floor(farenheit);
    },
  },
  async mounted() {
    const fatch = await fetch(
      `https://cricky-api.herokuapp.com/level?id=${this.$route.params.id}`
    );
    this.user = await fatch.json();
    const prom = await fetch(
      `https://cricky-helper.darshsikka.repl.co/user-to-discrim?id=${this.user.idE}`
    );
    const data = await prom.json();
    this.user.tag = data.tag;
    this.user.displayAvatarURL = data.displayAvatarURL;
    console.log(data);
  },
});
</script>
<style>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/img/bg.png");
  color: white;
  font-family: "Poppins", sans-serif;
  height: 90vh;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
