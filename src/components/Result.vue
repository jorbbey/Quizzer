<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { numberOfCorrectAnswers, quizQuestionLength } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
]);
</script>

<template>
  <div class="flex justify-center items-center w-full">
    <div class="py-6 bg-[bisque] rounded-xl shadow-2xl w-5/6 md:w-1/2 mt-10 flex flex-col justify-around items-center">
      <p class="text-[32px] font-semibold my-4">Your Results ...</p>
      <h1 class="text-[48px] my-3 font-bold">
        {{ numberOfCorrectAnswers }} / {{ quizQuestionLength }}
      </h1>
      <RouterLink to="/"
        ><div
          class="my-10 w-20 h-10 border-2 border-white font-semibold flex justify-center items-center rounded-lg shadow-sm"
        >
          Go Back
        </div></RouterLink
      >
    </div>
  </div>
</template>
