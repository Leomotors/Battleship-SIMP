<template>
  <div class="page-404 d-flex flex-column justify-content-center">
    <h1 class="display-1">
      <span class="text-danger">4</span>
      <span>0</span>
      <span class="text-danger">4</span>
    </h1>
    <h1 class="display-2">
      <span class="text-danger">Pa</span>ge
      <span class="text-primary">not</span>
      Fou<span class="text-danger">nd</span>
    </h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PageNotFound extends Vue {}
</script>

<style scoped lang="scss">
.page-404 {
  height: 100vh;
  background-image: url("https://upload.wikimedia.org/wikipedia/th/8/87/%E0%B8%9E%E0%B8%A5%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A2%E0%B8%B6%E0%B8%94%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%8822_%E0%B8%9E%E0%B8%A4%E0%B8%A9%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%A1_2557.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

* {
  font-weight: bold;
}
</style>
