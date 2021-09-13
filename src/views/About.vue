<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VueCredits />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import VueCredits from "@/components/VueCredits.vue";

@Options({
  components: {
    VueCredits,
  },
})
export default class About extends Vue {}
</script>
