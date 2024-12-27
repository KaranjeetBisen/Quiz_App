import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QuestionService } from '../../../../services/question.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-question',
  imports: [CommonModule, FormsModule,ReactiveFormsModule, RouterLink],
  templateUrl: './update-question.component.html',
  styleUrl: './update-question.component.scss',
})
export class UpdateQuestionComponent implements OnInit {
  id !: number; // Initialize id properly
  updateCustomerForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Access route parameters within ngOnInit
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    console.log('Question ID:', this.id);

     this.updateCustomerForm =this.fb.group({
        category: [null , Validators.required],
        questionTitle: [null , Validators.required],
        option1: [null , Validators.required],
        option2: [null , Validators.required],
        option3: [null , Validators.required],
        option4: [null , Validators.required],
        rightAnswer: [null , Validators.required],
        difficultyLevel: [null , Validators.required],
       })
       this.getCustomerById();
  }

  getCustomerById(){
    this.questionService.getCustomerById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

  updateQuestion(){
    this.questionService.updateCustomer(this.id, this.updateCustomerForm.value).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl("questionService/allQuestions");
    })
  }

  cancelToggle(){
    this.router.navigateByUrl("questionService/allQuestions");
  }
}
