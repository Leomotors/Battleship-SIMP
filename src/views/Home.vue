<template>
  <div class="home">
    <h1>Welcome to Battleship SIMP</h1>
    <!-- <BattleField /> -->
    <form>
      <p>Room ID</p>
      <input id="RoomID" type="number" />
      <button @click.prevent="click">Random One for me</button>
      <p>Your Gaymrs Name</p>
      <input id="GamerName" type="text" />
      <br />
      <button @click.prevent="click">Join the War</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BattleField from "@/components/BattleField.vue";

@Options({
  components: {
    BattleField,
  },
})
export default class Home extends Vue {}
</script>
