import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../../../services/quiz-Service/quiz.service';

@Component({
  selector: 'app-post-quiz',
  imports: [FormsModule],
  templateUrl: './post-quiz.component.html',
  styleUrl: './post-quiz.component.scss'
})
export class PostQuizComponent {

  constructor(private quizService: QuizService){}

    category: string = '';
    title: string='';
    numQ !: number;

  postQuiz(){
    this.quizService.postQuiz(this.category, this.numQ, this.title).subscribe((response) => {
      console.log('Quiz submitted successfully:', response);
          alert('Quiz added successfully!');
    });
}

}
