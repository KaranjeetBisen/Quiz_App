import { Routes } from '@angular/router';
import { QuestionComponent } from './components/getQuestion/getQuestion.component';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';

export const routes: Routes = [

    {path:'questionService', component:QuestionComponent},
    {path:'add', component:PostQuestionComponent},
    {path:'update/:id', component:UpdateQuestionComponent}


];
