<template>
  <main class="main">
    <h1 class="text"><p class="desc">Most Wins</p></h1>
  </main>
  <main class="main">
    <table class="commands">
      <tr>
        <th>Username</th>
        <th>Wins</th>
        <th>Highest</th>
        <th>Half centuries</th>
        <th>Centuries</th>
      </tr>
      <tr v-for="usr in fach" :key="usr.username">
        <td>{{ usr.username }}</td>
        <td>{{ usr.won }}</td>
        <td>{{ usr.highest }}</td>
        <td>{{ usr.fifties }}</td>
        <td>{{ usr.hundreds }}</td>
      </tr>
    </table>
  </main>
  <main class="main">
    <h1 class="text"><p class="desc">Highest scores</p></h1>
  </main>
  <main class="main">
    <table class="commands">
      <tr>
        <th>Username</th>
        <th>Wins</th>
        <th>highest</th>
      </tr>
      <tr v-for="usr in fach2" :key="usr.username">
        <td>{{ usr.username }}</td>
        <td>{{ usr.won }}</td>
        <td>{{ usr.highest }}</td>
      </tr>
    </table>
  </main>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Leaderboard",
  data() {
    return {
      fach: [],
      fach2: [],
    };
  },
  async mounted() {
    const fac = await fetch("https://cricky-api.darshsikka.repl.co/lb?sort=won");
    this.fach = await fac.json();
    const fac2 = await fetch(
      "https://cricky-api.darshsikka.repl.co/lb?sort=highest"
    );
    this.fach2 = await fac2.json();
  },
});
</script>
