<template>
  <div id="BattleField">
    <table>
      <tr>
        <td><div class="tile"></div></td>
        <td><div class="tile"></div></td>
      </tr>
      <tr>
        <td><div class="tile"></div></td>
        <td><div class="tile"></div></td>
      </tr>
    </table>
    Windows 11 PRO
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
export default class BattleField extends Vue {}
</script>

<style scoped lang="scss">
.tile {
  background-color: #0078d4;
  border: 0.1em solid black;
  height: 5em;
  width: 5em;
}
table {
  margin: 0 auto;
}
</style>
