<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps( [ "quiz" ] );

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};

</script>
<template>
  <div
    class="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-2xl my-4 mx-4 cursor-pointer"
    @click="navigateToQuiz()"
  >
    <img :src="quiz.img" alt="image" class="w-[100%] h-[190px] m-0" />
    <!-- card text -->
    <div class="my-4 mx-2">
      <h2 class="font-bold text-2xl">{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>
