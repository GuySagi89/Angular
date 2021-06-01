import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/Model/Question';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  constructor() {}
  @Input() summaryQuestions: Question[] = [];

  ngOnInit(): void {

  }
}
