<script setup lang="ts">
import {TresCanvas, useRenderLoop} from '@tresjs/core';
import {ref} from "vue";

const x = ref(0)
const z = ref(0)

const {onLoop} = useRenderLoop()

onLoop(({elapsed}) => {
  x.value = Math.sin(elapsed)
  z.value = elapsed
})

</script>

<template>
</template>

<style scoped>

</style>