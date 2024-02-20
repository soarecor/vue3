<script setup>
import { ref } from 'vue'

const points = ref([])

const plotPoint = e => {
  console.log(e)
  points.value.push({ x: e.offsetX, y: e.offsetY })
  console.log(points)

  // if(pointsX.includes(e.offSetX) && pointsY.includes(e.offSetY)){
  //   points.values.
  // }
}

const removePoint = e => {
  console.log(e, 'removing point')
}
</script>

<template>
  <div class="parent" @click="plotPoint">
    <div
      class="point"
      v-for="{ x, y } in points"
      :key="x"
      :style="{ left: `${x}px`, top: `${y}px`, border: `4px solid #fff` }"
      @click.stop="removePoint"
    ></div>
  </div>
</template>

<style scoped>
.parent {
  height: 100vh;
  width: 100vw;
  background: grey;
  border: 4px solid red;
  position: relative;
}

.point {
  position: absolute;
  height: 10px;
  width: 10px;
  background: '#ffffff';
}
</style>
