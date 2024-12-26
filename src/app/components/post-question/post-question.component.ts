import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Question } from '../../../models/question';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-post-question',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './post-question.component.html',
  styleUrl: './post-question.component.scss',
})
export class PostQuestionComponent implements OnInit {
  postCustomerForm!: FormGroup;

  constructor(
    private questionService: QuestionService,
    private fb: FormBuilder
  ) {}

  ngOnInit(){
   this.postCustomerForm =this.fb.group({
    category: [null , Validators.required],
    questionTitle: [null , Validators.required],
    option1: [null , Validators.required],
    option2: [null , Validators.required],
    option3: [null , Validators.required],
    option4: [null , Validators.required],
    rightAnswer: [null , Validators.required],
    difficultyLevel: [null , Validators.required],
   })
  }


  postCustomer(){
      // Check if the form is valid before submitting
      if (this.postCustomerForm.invalid) {
        alert('Please fill in all required fields before submitting.');
        this.postCustomerForm.markAllAsTouched(); // Mark all fields as touched to display validation errors
        return;
      }

      // Map form values to the Question model
    const question: Question = {
      category: this.postCustomerForm.value.category,
      questionTitle: this.postCustomerForm.value.questionTitle,
      option1: this.postCustomerForm.value.option1,
      option2: this.postCustomerForm.value.option2,
      option3: this.postCustomerForm.value.option3,
      option4: this.postCustomerForm.value.option4,
      rightAnswer: this.postCustomerForm.value.rightAnswer,
      difficultyLevel: this.postCustomerForm.value.difficultyLevel,
    };
  
      // Proceed with the API call if the form is valid
      this.questionService.postCustomer(question).subscribe(
        (response) => {
          console.log('Question submitted successfully:', response);
          alert('Question added successfully!');
          this.postCustomerForm.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('Error submitting question:', error);
          alert('Failed to add the question. Please try again.');
        }
      );
    }
  }

