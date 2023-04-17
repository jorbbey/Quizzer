<script setup>
import Questions from "../components/QuesTions";
import QuizHeader from "../components/QuizHeader";
import Result from "../components/Result";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import quizes from "../data/quizes.json";
// const mathApi = 'https://opentdb.com/api.php?amount=40&category=19'

// const fetchMathQuestions = async () => {
//   const res = await fetch( mathApi )
//   const data = await res.json()
//   console.log( data );
// }

// fetchMathQuestions()


const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizId);

const activeQuestionIndex = ref(0);

const numberOfCorrectAnswers = ref(0);

const showResults = ref(false);

// const questionStatus = ref(
//   `${activeQuestionIndex.value}/${quiz.questions.length}`
// );

// watch(
//   () => activeQuestionIndex.value,
//   () => {
//     questionStatus.value = `${activeQuestionIndex.value}/${quiz.questions.length}`;
//   }
// );

const questionStatus = computed(
  () => `${activeQuestionIndex.value}/${quiz.questions.length}`
);

const barPercentage = computed(
  () => `${(activeQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelect = (isCorrect) => {
  console.log("emmited event", isCorrect);
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length - 1 === activeQuestionIndex.value) {
    showResults.value = true;
     }

  activeQuestionIndex.value++;
};
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Questions
        v-if="!showResults"
        :question="quiz.questions[activeQuestionIndex]"
        @selectOption="onOptionSelect"
      />
      <Result v-else
      :quizQuestionLength="quiz.questions.length"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
       />
    </div>
  </div>
</template>
