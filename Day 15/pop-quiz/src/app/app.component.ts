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
      caption: 'How does Jim spell his first name?',
      answers: ['JMI', 'MIJ', 'IJM'],
      correctAnswer: 1,
      userAnswer: -1,
    },
    {
      caption: "What color is Jim's red gun?",
      answers: ['Blue', 'Green', 'Yellow'],
      correctAnswer: 2,
      userAnswer: -1,
    },
    {
      caption:
        'If Dan was stuck in Mexico City, how many days would it take before he would eat?',
      answers: [
        'Dan-Food=Time',
        'Mexican food is evil',
        'Mexican food is good; Dan is evil',
      ],
      correctAnswer: 2,
      userAnswer: -1,
    },
    {
      caption: 'Can Jim speak French?',
      answers: [
        'Oui',
        'Non',
        'Michelle, ma belle, sont les mots qui vont tres bien ensemble',
      ],
      correctAnswer: 1,
      userAnswer: -1,
    },
    {
      caption: "Does Jim's mother approve of the girls he dates?",
      answers: [
        ' No, she does not',
        'Jim never brings any home',
        'Worms do not have mothers; they reproduce asexually',
      ],
      correctAnswer: 0,
      userAnswer: -1,
    },
  ];

  onChoice(answer: number) {
    console.log(answer);
    if (answer === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.questions[this.currentQuestionIndex].userAnswer = answer;
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

  chosenReplay(isReplay: boolean) {
    if (isReplay) {
      this.isTestDone = false;
      this.score = 0;
      this.currentQuestionIndex = 0;
    }
  }
}
