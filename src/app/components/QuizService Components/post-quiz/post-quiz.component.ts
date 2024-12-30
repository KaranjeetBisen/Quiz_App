import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../../../services/quiz-Service/quiz.service';
import { QuestionService } from '../../../../services/question-Service/question.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-quiz',
  imports: [FormsModule,NgFor],
  templateUrl: './post-quiz.component.html',
  styleUrl: './post-quiz.component.scss'
})
export class PostQuizComponent implements OnInit{

  constructor(private quizService: QuizService, private questionService: QuestionService){}

  category: string = '';
  title: string='';
  numQ !: number;
  categories : string[] = [];

  ngOnInit(): void {
      this.getAllCategories();

  }

  getAllCategories() {
    this.questionService.getAllCategoreis().subscribe((response) => {
      this.categories = response;
    });
  }
  
  postQuiz(){
    this.quizService.postQuiz(this.category, this.numQ, this.title).subscribe((response) => {
      console.log('Quiz submitted successfully:', response);
          alert('Quiz added successfully!');
    });
}

}
