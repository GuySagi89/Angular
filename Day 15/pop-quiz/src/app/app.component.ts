import { Component } from '@angular/core';
import { Question } from './Model/Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pop-quiz';
  isTestDone = false;
  questions: Question[] = [
    {
      caption: 'abc',
      answers: ['a', 'b', 'c', 'd'],
      correctAnswer: 3,
      userAnswer: 0,
    },
    {
      caption: 'abc',
      answers: ['a', 'b', 'c', 'd'],
      correctAnswer: 4,
      userAnswer: 0,
    },
    {
      caption: 'abc',
      answers: ['a', 'b', 'c', 'd'],
      correctAnswer: 2,
      userAnswer: 0,
    },
  ];


}
