<template>
  <div id="WaitingRoom">
    <h1 class="pt-5 mb-2 display-2 room-title">
      Waiting Room
      <span class="h2 text-muted">Room Number: {{ roomID }}</span>
    </h1>
    <div class="user-cards container-xl mt-4">
      <UserCard
        :uuid="me?.uuid"
        :name="me?.name"
        :pfp="me?.pfp"
        :ready="readyState.me"
        @ready="changeReadyState"
        :isUser="true"
      ></UserCard>
      <h1 class="VS my-3 badge badge-pill bg-secondary">VS</h1>
      <UserCard
        :uuid="opponent?.uuid"
        :name="opponent?.name"
        :pfp="opponent?.pfp"
        :ready="readyState.opponent"
        :isUser="false"
      ></UserCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserCard from "@/components/UserCard.vue";

import { db } from "@/backend/Firebase";
import { ref, set, child, get, onValue } from "firebase/database";

import { useStore } from "@/store/index";
import { User } from "@/backend/User";

@Options({
  components: {
    UserCard,
  },
})
export default class WaitingRoom extends Vue {
  readonly store = useStore();
  me?: User;
  opponent: User = {};
  roomID = "";
  userRole = "";
  opponentRole = "";

  readyState = {
    me: false,
    opponent: false,
  };

  created(): void {
    this.me = this.store.state.user;

    if (!this.me.uuid)
      this.$router.replace({
        name: "ปรับทัศนคติ",
        params: {
          errorMsg: "Can't verify identity, please join the war properly!",
        },
      });

    this.roomID = this.$route.params.roomID as string;

    if (!this.roomID)
      this.$router.replace({
        name: "ปรับทัศนคติ",
        params: { errorMsg: "No Room ID Found!" },
      });

    this.joinRoom();
  }

  async joinRoom(): Promise<void> {
    const snapshot = await get(child(ref(db), `rooms/${this.roomID}`));
    const ssData = snapshot.val();

    if (snapshot.exists()) {
      if (ssData.guest) {
        // * Room is full
        this.$router.replace({
          name: "ปรับทัศนคติ",
          params: { errorMsg: "Room is Full!" },
        });
        return;
      }

      // * Append yourself to guest
      set(ref(db, `rooms/${this.roomID}`), {
        ...ssData,
        guest: this.me,
        guestReady: false,
      });
      this.opponent = ssData.host;
      this.userRole = "guest";
      this.opponentRole = "host";
    } else {
      // * Create Room if not exist
      set(ref(db, `rooms/${this.roomID}`), {
        created: Date().toString(),
        host: this.me,
        hostReady: false,
        guest: null,
        guestReady: false,
      });
      // * Keep Track of Guest
      const guestRef = ref(db, `rooms/${this.roomID}/guest`);
      onValue(guestRef, (snapshot) => {
        this.opponent = snapshot.val();
      });
      this.userRole = "host";
      this.opponentRole = "guest";
    }

    const OpponentReadyRef = ref(
      db,
      `rooms/${this.roomID}/${this.opponentRole}Ready`
    );
    onValue(OpponentReadyRef, (snapshot) => {
      this.readyState.opponent = snapshot.val();
      this.checkReadyState();
    });
  }

  changeReadyState(): void {
    this.readyState.me = !this.readyState.me;
    set(
      ref(db, `rooms/${this.roomID}/${this.userRole}Ready`),
      this.readyState.me
    );
    this.checkReadyState();
  }

  // * Check if both player is ready, if yes, redirect to game
  checkReadyState(): void {
    if (this.readyState.me && this.readyState.opponent) {
      this.store.commit("setRoomInfo", {
        myRole: this.userRole,
        opponentRole: this.opponentRole,
        roomID: this.roomID,
      });
      this.$router.push({ name: "Game" });
    }
  }

  goHome(): void {
    this.$router.replace({ path: "/" });
  }
}
</script>

<style scoped lang="scss">
h1.room-title {
  font-weight: bold;
}

.VS {
  font-size: 4em;
  border-radius: 0.5em;
}

.onNoUser {
  height: 100vh;
}

.error-msg {
  width: 50vw;
}
</style>
