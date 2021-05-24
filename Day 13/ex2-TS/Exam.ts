import { Question } from "./question";

export class Exam {

    private questions: Question[] = []

    addQuestion(question: Question): void {
        this.questions.push(question);
    }

    print(): void {

        for (const question of this.questions) {
            console.log(question.caption);
            for (const answer of question.answers) {
                console.log(answer);
            }
            console.log('-------------------------------');
        }
    }

    grade(answers: number[]): number {

        let score = 0;
        let maxRun = Math.min(answers.length, this.questions.length);

        for (let i = 0; i < maxRun; i++) {
            if(answers[i]==this.questions[i].correctIndex){
                score++;
            }
        }

        if (score == 0) {
            return score;
        }
        return (score/this.questions.length ) * 100;
    }
}