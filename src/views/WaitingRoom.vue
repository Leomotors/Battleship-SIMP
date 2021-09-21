<template>
  <div id="WaitingRoom">
    <h1 class="pt-5 mb-5 display-2">Waiting Room</h1>
    <div class="user-cards container-xl">
      <UserCard
        :uuid="stupidfn()"
        name="Prayut"
        pfp="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Prayuth_2018_cropped.jpg/800px-Prayuth_2018_cropped.jpg"
        :ready="readyState.me"
        @ready="changeReadyState('me')"
      ></UserCard>
      <h1 class="VS my-3 badge badge-pill bg-secondary">VS</h1>
      <UserCard
        :uuid="stupidfn()"
        name="Thaksin"
        pfp="https://i1.wp.com/www.thailandnews.co/wp-content/uploads/Thaksin20.jpg"
        :ready="readyState.opponent"
        @ready="changeReadyState('opponent')"
      ></UserCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserCard from "@/components/UserCard.vue";
import { v4 as uuid } from "uuid";

@Options({
  components: {
    UserCard,
  },
})
export default class WaitingRoom extends Vue {
  stupidfn = uuid;
  readyState = {
    me: false,
    opponent: false,
  };

  changeReadyState(key: "me" | "opponent"): void {
    this.readyState[key] = !this.readyState[key];
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
</style>
