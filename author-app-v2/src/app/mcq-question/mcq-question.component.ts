import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MCQQuestion, MCQQuestionOption } from '../models/question.model';

@Component({
  selector: 'mcq-question',
  templateUrl: './mcq-question.component.html',
  styleUrls: ['./mcq-question.component.scss']
})
export class McqQuestionComponent implements OnInit {

  @Input()
  question!: MCQQuestion;

  isEditable: boolean = false;

  @Output('editQuesiton')
  editQuestion = new EventEmitter<MCQQuestion>;

  constructor() { }

  ngOnInit(): void {
  
  }

  selectAnswer(option: MCQQuestionOption) {
    this.question.correctOption = option.optionId
  }

  questionEdit() {
    this.editQuestion.next(this.question);
  }
}
