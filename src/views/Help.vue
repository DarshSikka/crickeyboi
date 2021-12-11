<template>
  <div class="help">
    <div class="text">
      <h1>Cricket Game Bot Help</h1>
      <p>
        Once you make the challenge, you need to dm the bot with either your
        shot or your ball command, if you are batting use shot and during
        bowling use ball command.
      </p>
      <h2>Prefix</h2>
      <p>cg!</p>
      <h2>Shot</h2>
      <p>cg!shot &lt;shot_name></p>
      <h2>Ball</h2>
      <p>cg!ball &lt;ball_name></p>
      <h2>Quit Game</h2>
      <p>cg!quit</p>
      <h2>Challenge</h2>
      <p>cg!chal @personyouwanttochallenge</p>
      <h2>Shots</h2>
      <ul>
        <li>0 or cover_drive</li>
        <li>1 or square_drive</li>
        <li>2 or pull</li>
        <li>3 or straight_drive</li>
      </ul>

      <h2>Balls</h2>
      <ul>
        <li>0 or yorker</li>
        <li>1 or good</li>
        <li>2 or full</li>
        <li>3 or short</li>
      </ul>
      <h2>Strengths of shots</h2>
      <ul>
        <li>cover_drive - full</li>
        <li>square_drive - yorker</li>
        <li>straight_drive - good</li>
        <li>pull - short</li>
      </ul>
      <h2>Weaknesses of shots</h2>
      <ul>
        <li>cover_drive - short</li>
        <li>square_drive - good</li>
        <li>straight_drive - full</li>
        <li>pull - yorker</li>
      </ul>
      <h2>Lofting shots</h2>
      <p>
        pass lofted_ before the shot name to play a loft. Example. cg!shot
        lofted_cover_drive
      </p>
      <h2>Leaderboard</h2>
      <p>use cg!lb to see the leaderboard</p>
      <h2>Invite</h2>
      <p>cg!invite (add the bot to your server)</p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Help",
  data() {},
});
</script>
<style lang="scss">
@import "../design/help";
</style>
