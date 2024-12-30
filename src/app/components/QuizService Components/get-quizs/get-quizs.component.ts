import { Component } from '@angular/core';
import { QuizService } from '../../../../services/quiz-Service/quiz.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Quiz } from '../../../../models/quiz';

@Component({
  selector: 'app-get-quizs',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './get-quizs.component.html',
  styleUrl: './get-quizs.component.scss'
})
export class GetQuizsComponent {
    constructor(private quizService: QuizService) {}
  
  quizList: any[] = [];

  ngOnInit() {
    this.getAllQuizs();
  }

  getAllQuizs() {
    this.quizService.getAllQuiz().subscribe((response) => {
      this.quizList = response;
    });
  }

  takeQuizById( id: number){
    window.location.href = `quizService/getQuizQuestions/${id}`;

}

}
