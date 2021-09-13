<template>
  <div class="about">
    <div class="navbar"><router-link to="/">Go Home</router-link></div>
    <h1>This is an about page</h1>
    <p>App Version: {{ AppVersion }}</p>
    <p>Built at: {{ AppBuildTime }}</p>
    <VueCredits />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import VueCredits from "@/components/VueCredits.vue";
import { Version, BuildTime } from "@/config";

@Options({
  components: {
    VueCredits,
  },
})
export default class About extends Vue {
  AppVersion = Version;
  AppBuildTime = BuildTime;
}
</script>

<style scoped lang="scss">
.navbar {
  padding: 2em;

  a {
    font-weight: bold;
    color: #42b983;
  }
}
</style>
