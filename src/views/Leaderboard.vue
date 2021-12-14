<template>
  <main class="main">
    <table class="commands">
      <tr>
        <th>Username</th>
        <th>Wins</th>
        <th>highest</th>
      </tr>
      <tr v-for="usr in fach" :key="usr.username">
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
    };
  },
  async mounted() {
    const fac = await fetch("https://cricky-api.herokuapp.com/lb?sort=won");
    this.fach = await fac.json();
  },
});
</script>
