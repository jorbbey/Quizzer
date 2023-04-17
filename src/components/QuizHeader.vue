<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<template>
  <header class="my-10">
    <h4 class="text-2xl">Question {{ questionStatus }}</h4>
    <!-- bar -->
    <div class="w-[300px] rounded-xl h-[25px] border-2 border-[bisque]">
      <!-- completion -->
      <div class="h-full bg-[bisque]" style="width: 0%" :style='{width: barPercentage}'></div>
    </div>
  </header>
</template>
