<template>
  <div class="Game">Game Page (Work in Progress)</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useStore } from "@/store/index";

import { db } from "@/backend/Firebase";
import { ref, child, get } from "firebase/database";

import { User } from "@/backend/User";
import { RoomInfo } from "@/backend/RoomInfo";

export default class Game extends Vue {
  readonly store = useStore();
  roomInfo?: RoomInfo;

  me?: User;
  opponent?: User;

  created(): void {
    this.roomInfo = this.store.state.roomInfo;

    this.setPlayers();
  }

  async setPlayers(): Promise<void> {
    const mySnapshot = await get(
      child(ref(db), `rooms/${this.roomInfo?.roomID}/${this.roomInfo?.myRole}`)
    );

    this.me = mySnapshot.val();

    const opponentSnapshot = await get(
      child(
        ref(db),
        `rooms/${this.roomInfo?.roomID}/${this.roomInfo?.opponentRole}`
      )
    );

    this.opponent = opponentSnapshot.val();
  }
}
</script>

<style lang="scss"></style>
