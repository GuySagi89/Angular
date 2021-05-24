import { Question } from "./Question";

class Exam{
    constructor(
        private questions: Question[]
    ){}

    addQuestion(question:Question): void{
        this.questions.push(question);
    }

    print(): void{
   
    for (let question of this.questions) {
        console.log(question);
}
    }

    grade(answers: number[]): number{
        return 3;
    }
}