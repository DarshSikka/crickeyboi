<template>
  <main class="main">
    <table class="commands">
      <tr>
        <th>Username</th>
        <th>Level</th>
        <th>XP</th>
      </tr>
      <tr v-for="usr in fach" :key="usr.username">
        <td>{{ usr.tag || "loading..." }}</td>
        <td>{{ usr.level }}</td>
        <td>{{ usr.xp }}</td>
      </tr>
    </table>
  </main>
</template>
<script>
export default {
  data() {
    return { fach: [] };
  },
  async mounted() {
    const lb = await fetch(
      "https://cricky-api.darshsikka.repl.co/leaderboard-users"
    );
    this.fach = await lb.json();
    this.fach = await Promise.all(
      this.fach.map(async (ele) => {
        const userdata = await fetch(
          `https://cricky-helper.darshsikka.repl.co/user-to-discrim?id=${ele.idE}`
        );
        const { tag } = await userdata.json();
        console.log(tag);
        return { ...ele, tag };
      })
    );
  },
};
</script>
