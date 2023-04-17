<script setup>
import { RouterView } from "vue-router";
// import QuizesView from './views/QuizesView.vue'
</script>

<template>
  <div class="max-w-[1000px]" :style="{ margin: '0 auto' }">
    <RouterView />
    <footer class="flex justify-center items-center w-full my-40">
      <small>
        made @ 
        <a href="https://jorbbey.netlify.app" class="text-green-600 decoration-slice cursor-pointer">Jorbbey</a>
        <p class="capitalize text-semibold">all right reserved</p></small
      >
    </footer>
  </div>
</template>
