import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuizsComponent } from './get-quizs.component';

describe('GetQuizsComponent', () => {
  let component: GetQuizsComponent;
  let fixture: ComponentFixture<GetQuizsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetQuizsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetQuizsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
