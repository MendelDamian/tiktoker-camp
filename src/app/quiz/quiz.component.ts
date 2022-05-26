import { Component } from '@angular/core';
import { QuestionInterface } from './quiz-question/quiz-question.component';
import { ResultInterface } from './quiz-results/quiz-results.component';
import questions from '/src/assets/quiz/quiz_questions.json';
import results from '/src/assets/quiz/quiz_results.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions: Array<QuestionInterface> = questions;
  results: Array<ResultInterface> = results;
  numberOfQuestions: number = this.questions.length;

  currentQuestionId: number = 0;
  answers: Array<number> = [];
  showResults: boolean = false;

  constructor() {
  }

  onVoted(option: number): void {
    this.answers.push(option);
    this.showResults = this.currentQuestionId === this.questions.length - 1;
    this.currentQuestionId = this.showResults ? this.currentQuestionId : this.currentQuestionId + 1;
  }

}
