"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var exam = new exam_1.Exam();
exam.addQuestion({
    caption: "Who is the king of the animals in Africa?",
    answers: ['Marimba', 'Help, I cant swimba', 'Earthworm Jimba'],
    correctIndex: 0
});
exam.addQuestion({
    caption: "If Dan was stuck in Mexico City, how many days would it take before he would eat?",
    answers: ['Dan-Food=Time', 'Mexican food is evil', 'Mexican food is good; Dan is evil'],
    correctIndex: 1
});
exam.addQuestion({
    caption: "When is Jim's birthday?",
    answers: ['The day he was born', 'June 9, 1994', 'Today if you have a present'],
    correctIndex: 2
});
exam.addQuestion({
    caption: "If cigarettes cause cancer, what causes Capricorn?",
    answers: ['Poor-fitting shoes in southern France', 'Dental floss', 'One and one half pounds of butter'],
    correctIndex: 2
});
exam.print();
var ans1 = [0, 1, 2, 2];
var ans2 = [2, 2, 1, 0];
var ans3 = [1, 2, 2, 2, 4, 4, 4];
console.log(ans1);
console.log(exam.grade(ans1));
console.log(ans2);
console.log(exam.grade(ans2));
console.log(ans3);
console.log(exam.grade(ans3));
//# sourceMappingURL=main.js.map