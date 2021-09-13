<template>
  <div id="GamerForm">
    <div id="ProfilePicCtrl">
      <div
        id="ProfilePic"
        v-bind:style="{ backgroundImage: `url(${background})` }"
      ></div>
      <div id="CtrlButtons">
        <button class="arrow" id="lt" @click="changeBackground(-1)">
          &lt;
        </button>
        <button class="arrow" id="gt" @click="changeBackground(1)">&gt;</button>
      </div>
    </div>
    <div id="FormPart">
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
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ProfilePic } from "@/data/ProfilePic";

const ID_Range = 1000000;

export default class GamerForm extends Vue {
  roomID: number | null = null;
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
}
</script>

<style scoped lang="scss">
$pfp-size: 13em;

* {
  box-sizing: border-box;
}

#GamerForm {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 1em 1em;
  justify-content: center;
  div {
    margin: 0 1em;
  }
}

#ProfilePicCtrl {
  button {
    width: 50%;
    border: 1px solid black;
    &#lt {
      border-radius: 0 0 0 1em;
    }
    &#gt {
      border-radius: 0 0 1em 0;
    }
  }
}

#ProfilePic {
  height: $pfp-size;
  width: $pfp-size;
  flex: flex-basis;

  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 1em 1em 0 0;
}

.arrow {
  font-size: 1.3em;
}

#FormPart {
  flex: flex-basis;

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
  }
  button {
    border-radius: 0.4em;
  }
}
</style>
