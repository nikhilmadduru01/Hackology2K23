import { Component, OnInit } from '@angular/core';
import { MCQQuestion } from '../models/question.model';

@Component({
  selector: 'mcq-questions-list',
  templateUrl: './mcq-questions-list.component.html',
  styleUrls: ['./mcq-questions-list.component.scss']
})
export class McqQuestionsListComponent implements OnInit {

  question_list: MCQQuestion[] = [
    {
      questionText: "Question 1",
      answer: "answer 1",
      correctOption: '1', 
      options: [
        {
          optionId: '1',
          optionValue: "option 1"
        },{
          optionId: '2',
          optionValue: "option 1"
        },{
          optionId: '3',
          optionValue: "option 1"
        },{
          optionId: '4',
          optionValue: "option 1"
        }
      ]
    },
    {
      questionText: "Question 2",
      answer: "answer 2",
      correctOption: '1', 
      options: [
        {
          optionId: '1',
          optionValue: "option 1"
        },
        {
          optionId: '1',
          optionValue: "option 1"
        },
        {
          optionId: '1',
          optionValue: "option 1"
        },
        {
          optionId: '1',
          optionValue: "option 1"
        }
      ]
    },
    {
      questionText: "Question 3",
      answer: "answer 3",
      correctOption: '1', 
      options: [
        {
          optionId: '1',
          optionValue: "option 1"
        },
        {
          optionId: '1',
          optionValue: "option 1"
        },
        {
          optionId: '1',
          optionValue: "option 1"
        },
        {
          optionId: '1',
          optionValue: "option 1"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  editQuestion() {

  }

}
