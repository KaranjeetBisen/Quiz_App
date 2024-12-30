import { Routes } from '@angular/router';
import { QuestionComponent } from './components/QuestionService Components/getQuestion/getQuestion.component';
import { PostQuestionComponent } from './components/QuestionService Components/post-question/post-question.component';
import { UpdateQuestionComponent } from './components/QuestionService Components/update-question/update-question.component';
import { SidebarComponent } from './components/QuestionService Components/sidebar Question/sidebar.component';
import { SidebarQuizComponent } from './components/QuizService Components/sidebar-quiz/sidebar-quiz.component';
import { GetQuizsComponent } from './components/QuizService Components/get-quizs/get-quizs.component';
import { PostQuizComponent } from './components/QuizService Components/post-quiz/post-quiz.component';
import { GetQuizQuestionsByIdComponent } from './components/QuizService Components/get-quiz-questions-by-id/get-quiz-questions-by-id.component';

export const routes: Routes = [
  {
    path: 'questionService',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'allQuestions', pathMatch: 'full' },
      { path: 'allQuestions', component: QuestionComponent },
      { path: 'updateQuestion/:id', component: UpdateQuestionComponent },
      { path: 'postQuestion', component: PostQuestionComponent },
    ],
  },
  {path:'quizService', component:SidebarQuizComponent,
    children:[
      { path: '', redirectTo: 'allQuizs', pathMatch: 'full' },
      {path:'allQuizs', component:GetQuizsComponent},
      {path:'postQuiz', component:PostQuizComponent},
      {path:'getQuizQuestions/:id', component:GetQuizQuestionsByIdComponent}
    ]
  }
];
