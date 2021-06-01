import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css'],
})
export class QuizOverComponent implements OnInit {
  constructor() {}
  @Input() score:number=0;
  @Input() nOfQuestions:number=0;
  @Output() replay=new EventEmitter<string>();

  ngOnInit(): void {}

  setReplayAnswer(){
    this.replay.emit('abc');
  }
}
