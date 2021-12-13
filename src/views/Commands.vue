<template>
  <main class="main">
    <table class="commands">
      <tr>
        <th>General Commands</th>
        <th>Batting Commands</th>
        <th>Bowling Commands</th>
      </tr>
      <tr>
        <td>To challenge someone, use <b>cg!chal {ping_the_opponent}</b></td>
        <td>To Play a shot, dm the bot <b>cg!shot {shot_name}</b></td>
        <td>To Throw a ball, dm the bot <b>cg!ball {ball_name}</b></td>
      </tr>
      <tr>
        <td>
          To invite the bot to your server, use
          <b>cg!invite</b>
        </td>
        <td>
          To loft in attempt for a six, dm the bot
          <b>cg!shot lofted_{shot_name}</b>
        </td>
        <td>To use spin bowling, dm the bot <b>cg!ball spin_{ball_name}</b></td>
      </tr>
      <tr>
        <td>
          There are four regular shots, and four regular balls. To spin or loft,
          use spin_ or lofted_ before their names
        </td>
        <td>
          Shots: <br />
          <b
            >cover_drive or 0<br />
            square_drive or 1<br />
            pull or 2<br />
            straight_drive or 3</b
          >
        </td>
        <td>
          Balls: <br />
          <b
            >0 or yorker<br />1 or good<br />
            2 or full<br />
            3 or short</b
          >
        </td>
      </tr>
      <tr>
        <td>
          All shots and balls have a strength. If you loft against a strength,
          you might get 6 or you might get out on it. On a normal shot against
          your strength, you get 4 runs. If the shot is neither a strength nor a
          weakness, you might get 1, 2 or 3 runs. Spin balls can get you out if
          its neither a strength nor a weakness. (33% chance)
        </td>
        <td>
          Shot Strengths<br /><b>
            cover_drive - full <br />square_drive - yorker <br />straight_drive
            - good <br />pull - short</b
          >
        </td>
        <td>
          Shot weaknesses (ball strengths)<br />
          <b>
            cover_drive - short<br />
            square_drive - good <br />straight_drive - full<br />
            pull - yorker
          </b>
        </td>
      </tr>
      <tr>
        <td>Leaderboard - <b>cg!lb</b></td>
        <td>Best batted(highest) also shows up in leaderboard</td>
        <td>Bowl well to win it and top the leaderboard</td>
      </tr>
    </table>
  </main>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Commands",
  data() {},
});
</script>
<style lang="scss">
@import "../design/commands.scss";
@import "../design/home";
</style>
