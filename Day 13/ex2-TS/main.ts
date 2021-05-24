import {Exam} from "./exam";

let exam =new Exam();
exam.addQuestion({
    caption:"Who is the king of the animals in Africa?",
    answers:['A. Marimba','B. Help, I cant swimba','C. Earthworm Jimba'],
    correctIndex:0
});

exam.addQuestion({
    caption:"If Dan was stuck in Mexico City, how many days would it take before he would eat?",
    answers:['A. Dan-Food=Time','B. Mexican food is evil','C. Mexican food is good; Dan is evil'],
    correctIndex:1
});

exam.addQuestion({
    caption:"When is Jim's birthday?",
    answers:['A. The day he was born','B. June 9, 1994','C. Today if you have a present'],
    correctIndex:2
});

exam.addQuestion({
    caption:"If cigarettes cause cancer, what causes Capricorn?",
    answers:['A. Poor-fitting shoes in southern France','B. Dental floss','C. One and one half pounds of butter'],
    correctIndex:2
});

exam.print();

let ans1 = [0, 1, 2, 2];    
let ans2 = [2, 2, 1, 0];    
let ans3 = [1, 2, 2, 2, 4, 4, 4]

console.log(ans1);
console.log(exam.grade(ans1));

console.log(ans2);
console.log(exam.grade(ans2));

console.log(ans3);
console.log(exam.grade(ans3));