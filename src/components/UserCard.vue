<template>
  <div
    class="UserCard mx-auto p-4 gx-3 container-xl row align-items-center"
    :style="{
      backgroundColor: `${
        ready ? 'rgba(191, 236, 107, 0.8)' : 'rgba(255, 240, 245, 0.8)'
      }`,
    }"
  >
    <div class="pfp col-lg-2" :style="{ backgroundImage: `url(${pfp})` }" />
    <div
      class="
        user-info
        col-xxl-10 col-xl-9 col-lg-7 col-md-5
        px-auto
        d-flex
        flex-column
        align-items-center
        justify-content-center
      "
    >
      <p class="h4 text-muted">{{ uuid }}</p>
      <p class="h1">{{ name }}</p>
      <button
        v-if="isUser"
        class="btn mt-3"
        :class="{ 'btn-success': !ready, 'btn-danger': ready }"
        @click="$emit('ready')"
      >
        {{ ready ? "Unready" : "Ready" }}
      </button>
      <div
        v-else
        class="h4"
        :class="{ 'text-success': ready, 'text-danger': !ready }"
      >
        {{ ready ? "Ready" : "Not Ready" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    uuid: String,
    name: String,
    pfp: String,
    ready: Boolean,
    isUser: Boolean,
  },
})
export default class UserCard extends Vue {}
</script>

<style scoped lang="scss">
$pfp-size: 12em;

.pfp {
  height: $pfp-size;
  width: $pfp-size;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.UserCard {
  border-radius: 1em;
}
</style>
