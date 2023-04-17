<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["selectOption"]);

const { question } = defineProps(["question"]);

const emitSelectedOpt = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div>
    <!-- question ctn -->
    <div class="my-10">
      <!--question -->
      <h1 class="text-2xl my-3">{{ question.text }}</h1>
    </div>
    <!-- options ctn -->
    <div>
      <!-- option -->
      <div
        class="flex mb-10 cursor-pointer"
        v-for="option in question.options"
        :key="option.id"
        @click="emitSelectedOpt(option.isCorrect)"
      >
        <p
          class="bg-[bisque] w-[40px] h-[45px] text-xl flex items-center justify-center"
        >
          {{ option.label }}
        </p>
        <div class="bg-gray-200 w-full text-xl p-2">
          <p class="mx-4">{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
