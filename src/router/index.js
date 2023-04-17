// define routing rules
import QuizesView from '../views/QuizesView.vue'
import QuizView from '../views/QuizView.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter( {
     history: createWebHistory( process.env.BASE_URL ),
     routes: [
          {
               path: '/',
               name: 'quizes',
               component: QuizesView
          },
          {
               path: '/quiz/:id',
               name: 'quiz',
               component: QuizView
          }, 
     ]
} )

export default router