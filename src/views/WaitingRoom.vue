<template>
  <div id="WaitingRoom" v-if="me?.uuid">
    <h1 class="pt-5 mb-5 display-2">Waiting Room</h1>
    <div class="user-cards container-xl">
      <UserCard
        :uuid="me?.uuid"
        :name="me?.name"
        :pfp="me?.pfp"
        :ready="readyState.me"
        @ready="changeReadyState('me')"
      ></UserCard>
      <h1 class="VS my-3 badge badge-pill bg-secondary">VS</h1>
      <UserCard
        :uuid="opponent?.uuid"
        :name="opponent?.name"
        :pfp="opponent?.pfp"
        :ready="readyState.opponent"
        @ready="changeReadyState('opponent')"
      ></UserCard>
    </div>
  </div>
  <div v-else class="onNoUser p-5">
    <div class="alert alert-danger m-auto" role="alert">
      <h1 class="alert-heading">No User Found</h1>
      <hr />
      <h4>Please join the War Properly</h4>
    </div>
    <button class="btn btn-info mt-5" @click="goHome">Go To Home Screen</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserCard from "@/components/UserCard.vue";

import { db } from "@/backend/Firebase";
import { ref, set, child, get } from "firebase/database";
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

  readyState = {
    me: false,
    opponent: false,
  };

  created(): void {
    this.me = this.store.state.user;
    this.roomID = this.$route.params.roomID as string;
    this.joinRoom();
  }

  async joinRoom(): Promise<void> {
    const snapshot = await get(child(ref(db), `rooms/${this.roomID}`));
    const hostData = snapshot.val();

    if (snapshot.exists()) {
      // * Append yourself to guest
      set(ref(db, `rooms/${this.roomID}`), {
        ...hostData,
        guest: this.me,
        guestReady: false,
      });
      this.opponent = hostData.host;
    } else {
      // * Create Room if not exist
      set(ref(db, `rooms/${this.roomID}`), {
        created: Date().toString(),
        host: this.me,
        hostReady: false,
      });
    }
  }

  changeReadyState(key: "me" | "opponent"): void {
    this.readyState[key] = !this.readyState[key];
  }

  goHome(): void {
    this.$router.push({ path: "/" });
  }
}
</script>

<style scoped lang="scss">
#WaitingRoom {
  min-height: 100vh;
  background-image: url("https://www.postapocalypticmedia.com/wp-content/uploads/2020/12/AoTOpening-1024x683.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.VS {
  font-size: 4em;
  border-radius: 0.5em;
}

.onNoUser {
  height: 100vh;
}
</style>
