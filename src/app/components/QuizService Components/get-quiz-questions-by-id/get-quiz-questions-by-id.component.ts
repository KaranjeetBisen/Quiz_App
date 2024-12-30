import { Component, OnInit } from '@angular/core';
import { QuestionWrapper } from '../../../../models/questionWrapper';
import { QuizService } from '../../../../services/quiz-Service/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Responsee } from '../../../../models/response';

@Component({
  selector: 'app-get-quiz-questions-by-id',
  imports: [CommonModule, FormsModule],
  templateUrl: './get-quiz-questions-by-id.component.html',
  styleUrl: './get-quiz-questions-by-id.component.scss'
})
export class GetQuizQuestionsByIdComponent implements OnInit{
  questions: QuestionWrapper[] = [];
  responses: Responsee[] = [];
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
    )}

    onSubmit() {
      this.responses = this.questions
        .filter((question) => question.selectedAnswer) // Ensure an answer is selected
        .map((question) => ({
          id: question.id,
          response: question.selectedAnswer as string, // Type assertion
        }));
      console.log('Responses:', this.responses);


      this.quizService.submitQuiz(this.quizId, this.responses).subscribe((response)=>{
        console.log(response);
    });
    

}
}
