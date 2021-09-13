<template>
  <div id="GamerForm">
    <form>
      <label>Room ID</label>
      <input id="RoomID" type="number" v-model="roomID" placeholder="69420" />
      <button @click.prevent="click" @click="randomID">
        Random One for me
      </button>
      <br />
      <label>Your Gaymrs Name</label>
      <input id="GamerName" type="text" placeholder="InwZaNonPrayut" />
      <br />
      <button @click.prevent="click">Join the War</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

const ID_Range = 1000000;

export default class GamerForm extends Vue {
  roomID: number | null = null;

  randomID(): void {
    this.roomID = Math.floor(Math.random() * ID_Range);
  }
}
</script>

<style lang="scss"></style>
