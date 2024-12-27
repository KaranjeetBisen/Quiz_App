import { Routes } from '@angular/router';
import { QuestionComponent } from './components/questionService Components/getQuestion/getQuestion.component';
import { PostQuestionComponent } from './components/questionService Components/post-question/post-question.component';
import { UpdateQuestionComponent } from './components/questionService Components/update-question/update-question.component';
import { SidebarComponent } from './components/questionService Components/sidebar Question/sidebar.component';
import { SidebarQuizComponent } from './components/QuizService Components/sidebar-quiz/sidebar-quiz.component';

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
  {path:'quizService', component:SidebarQuizComponent}
];
