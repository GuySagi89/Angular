"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exam = /** @class */ (function () {
    function Exam(questions) {
        this.questions = questions;
    }
    Exam.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    Exam.prototype.print = function () {
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            console.log(question);
        }
    };
    Exam.prototype.grade = function (answers) {
        return 3;
    };
    return Exam;
}());
//# sourceMappingURL=Exam.js.map