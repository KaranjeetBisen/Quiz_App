import { Component, OnInit } from '@angular/core';
import { QuestionWrapper } from '../../../../models/questionWrapper';
import { QuizService } from '../../../../services/quiz-Service/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-quiz-questions-by-id',
  imports: [CommonModule],
  templateUrl: './get-quiz-questions-by-id.component.html',
  styleUrl: './get-quiz-questions-by-id.component.scss'
})
export class GetQuizQuestionsByIdComponent implements OnInit{
  questions: QuestionWrapper[] = [];
  quizId!: number ;
 

  constructor(private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.quizId = Number(this.activatedRoute.snapshot.params['id']);
    this.fetchQuizQuestions();
  }


  fetchQuizQuestions(): void {
    this.quizService.getQuizQuestions(this.quizId).subscribe(
      (data: QuestionWrapper[]) => {
        this.questions = data;
      },
      (error) => {
        console.error('Error fetching questions:', error);
      }
    );

}}
