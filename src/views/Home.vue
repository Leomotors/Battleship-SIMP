<template>
  <div class="home">
    <div class="navbar"><router-link to="/about">About</router-link></div>
    <h1>Welcome to Battleship SIMP</h1>
    <GamerForm />
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
@import "nav";
</style>
