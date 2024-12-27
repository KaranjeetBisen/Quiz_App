import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarQuizComponent } from './sidebar-quiz.component';

describe('SidebarQuizComponent', () => {
  let component: SidebarQuizComponent;
  let fixture: ComponentFixture<SidebarQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
