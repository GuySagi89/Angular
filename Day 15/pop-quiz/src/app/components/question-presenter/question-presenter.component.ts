import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css'],
})
export class QuestionPresenterComponent implements OnInit {
  constructor() {}
  @Input() currentQuestion: string = '';
  @Input() answers:string[]=[];
  @Output() chosenAnswer = new EventEmitter<number>();

  ngOnInit(): void {}

  setSelectedAnswer(item: number) {
    this.chosenAnswer.emit(item);
  }
}
