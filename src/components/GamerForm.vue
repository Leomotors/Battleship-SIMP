<template>
  <div id="GamerForm" class="container-xl">
    <div id="ProfilePicCtrl" class="mx-auto mb-5">
      <div
        id="ProfilePic"
        class="mx-auto"
        v-bind:style="{ backgroundImage: `url(${background})` }"
      ></div>
      <div id="CtrlButtons" class="mx-auto">
        <button class="arrow" id="lt" @click="changeBackground(-1)">
          &lt;
        </button>
        <button class="arrow" id="gt" @click="changeBackground(1)">&gt;</button>
      </div>
    </div>
    <div
      id="FormPart"
      class="
        container-lg
        d-flex
        flex-column
        align-items-center
        justify-content-center
      "
    >
      <form>
        <div id="room-input">
          <label>Room ID</label>
          <input
            id="RoomID"
            type="number"
            v-model="roomID"
            placeholder="69420"
          />
          <button @click.prevent="randomID">Random One for me</button>
        </div>

        <div id="gamer-name-input">
          <label>Your Gaymrs Name</label>
          <input v-model="gamerName" type="text" placeholder="InwZaNonPrayut" />
        </div>

        <button @click.prevent="joinWar">Join the War</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { v4 as uuid } from "uuid";

import { ProfilePic } from "@/data/ProfilePic";
import { useStore } from "@/store/index";

const ID_Range = 1000000;

export default class GamerForm extends Vue {
  store = useStore();
  roomID: number | null = null;
  gamerName = "";
  bgIndex = 0;
  background = ProfilePic[this.bgIndex];

  randomID(): void {
    this.roomID = Math.floor(Math.random() * ID_Range);
  }

  changeBackground(dx: number): void {
    this.bgIndex += dx;
    if (this.bgIndex < 0) this.bgIndex += ProfilePic.length;
    if (this.bgIndex >= ProfilePic.length) this.bgIndex -= ProfilePic.length;
    this.background = ProfilePic[this.bgIndex];
  }

  joinWar(): void {
    this.store.commit("setUser", {
      name: this.gamerName,
      pfp: this.background,
      uuid: uuid(),
    });
    this.$router.push({ name: "WaitingRoom", params: { roomID: this.roomID } });
  }
}
</script>

<style scoped lang="scss">
$pfp-size: 13em;

* {
  box-sizing: border-box;
}

#ProfilePicCtrl {
  width: $pfp-size;
  button {
    width: 50%;
    border: 1px solid black;
    &#lt {
      border-radius: 0 0 0 1em;
    }
    &#gt {
      border-radius: 0 0 1em 0;
    }
    font-size: 1.3em;
  }
}

#ProfilePic {
  height: $pfp-size;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 1em 1em 0 0;
}

#FormPart {
  * {
    margin: 0.2em;
    padding: 0.1em;
  }
  label {
    font-size: 2em;
  }
  input,
  button {
    height: 2em;
    font-size: 1.5em;
    padding: 0 1em;
  }
  input {
    border-radius: 0.16em;
    &#RoomID {
      width: 8em;
    }
    &#GamerName {
      width: 13.3em;
    }

    // * https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  button {
    border-radius: 0.4em;
  }
}
</style>
