<script setup>
import { ref, watch } from "vue";
import quizesData from '../data/quizes.json'
import CardComponent from '../components/CardComponent.vue'

const quizes = ref(quizesData);
const search = ref("");

watch(search, () => {
  quizes.value = quizesData.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div>
     <header class="my-10 flex items-center">
      <h1 class="font-bold mx-4 text-3xl">Quizes</h1>
      <input
        type="text"
        class="bg-[rgba(128, 128, 128, 0.1)] p-1 rounded-lg border-2 bg-gray-200"
        placeholder="search..."
        v-model="search"
      />
    </header>
    <!-- card container -->
    <div class="flex flex-wrap justify-start items-center">
      <!-- card -->
      <CardComponent 
      v-for="quiz in quizes" 
      :key="quiz.id"
      :quiz="quiz"
       />
    </div>
  </div>
</template>
