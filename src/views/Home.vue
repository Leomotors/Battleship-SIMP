<template>
  <div class="home">
    <div class="my-navbar mx-auto">
      <router-link to="/about">About</router-link>
    </div>

    <div
      class="
        home-content
        container-xxl
        d-flex
        flex-column
        align-items-center
        justify-content-center
      "
    >
      <h1 class="my-5">Welcome to Battleship SIMP</h1>
      <GamerForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GamerForm from "@/components/GamerForm.vue";

@Options({
  components: {
    GamerForm,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home-content {
  height: 70vh;
}

.my-navbar {
  padding: 2em;

  a {
    font-weight: bold;
    color: #42b983;
  }
}
</style>
