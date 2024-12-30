import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuizQuestionsByIdComponent } from './get-quiz-questions-by-id.component';

describe('GetQuizQuestionsByIdComponent', () => {
  let component: GetQuizQuestionsByIdComponent;
  let fixture: ComponentFixture<GetQuizQuestionsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetQuizQuestionsByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQuizQuestionsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
