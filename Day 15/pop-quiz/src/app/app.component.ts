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
  hasTestStarted = false;
  score: number = 0;
  currentQuestionIndex: number = 0;

  chosenAnswer: string = '';

  questions: Question[] = [
    {
      caption: 'How are you?',
      answers: ['Fine', 'Could be better', 'huh?', 'Who that?'],
      correctAnswer: 3,
      userAnswer: -1,
    },
    {
      caption: 'abc2',
      answers: ['a', 'b', 'c', 'd'],
      correctAnswer: 2,
      userAnswer: -1,
    },
    {
      caption: 'abc3',
      answers: ['a', 'b', 'c', 'd'],
      correctAnswer: 0,
      userAnswer: -1,
    },
  ];

  onChoice(answer: number) {
    console.log(answer);
    if (answer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }

    this.currentQuestionIndex++;

    this.checkTestStatus();
  }

  checkTestStatus() {
    if (this.currentQuestionIndex === this.questions.length) {
      this.isTestDone = true;
    }
  }

  chosenReplay(isReplay:boolean){
    if(isReplay){
      this.isTestDone=false;
    }
  }
}
