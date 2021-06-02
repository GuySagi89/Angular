import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/Model/Question';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit, OnChanges {
  @Input() summaryQuestions: Question[] = [];
  @Input() currentQuestionIndex:number=0;

  questionsHistory:Question[]=[];

  ngOnInit(): void {
  }
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    for (let index = 0; index < this.currentQuestionIndex; index++) {
      this.questionsHistory[index]=this.summaryQuestions[index];
    }
  }
}
