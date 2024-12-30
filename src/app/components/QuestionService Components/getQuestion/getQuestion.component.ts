import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../../../../services/question-Service/question.service';
import { Question } from '../../../../models/question';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule,RouterOutlet],
  selector: 'app-question',
  templateUrl: './getQuestion.component.html',
  styleUrls: ['./getQuestion.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor(private questionService: QuestionService) {}
  questionList: any[] = [];

  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionService.getAllCustomer().subscribe((response) => {
      this.questionList = response;
    });
  }

  deleteQuestion(id: number) {
    console.log(id);
    this.questionService.deleteCustomer(id).subscribe((response) => {
      console.log(response);
      this.getAllQuestions();
    });
    
  }

  onUpdate( id: number){
    window.location.href = `questionService/updateQuestion/${id}`;

}
}