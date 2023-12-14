import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInterfaceComponent } from './question-interface.component';

describe('QuestionInterfaceComponent', () => {
  let component: QuestionInterfaceComponent;
  let fixture: ComponentFixture<QuestionInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
