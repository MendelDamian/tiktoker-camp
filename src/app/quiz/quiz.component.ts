import { Component } from '@angular/core';
import { QuestionInterface } from './quiz-question/quiz-question.component';
import { ResultInterface } from './quiz-results/quiz-results.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions: Array<QuestionInterface> = [
    {
      title: "Example question 1?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 2?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 3?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 4?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 5?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 6?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 7?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 8?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 9?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      title: "Example question 10?",
      imgSrc: "assets/dummy-img.png",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
  ]

  results: Array<ResultInterface> = [
    {
      name: "Example Influencer 1",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [0, 1, 2, 3, 1, 0, 2, 3, 0, 1]
    },
    {
      name: "Example Influencer 2",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [0, 1, 2, 3, 2, 0, 2, 2, 0, 2]
    },
    {
      name: "Example Influencer 3",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [0, 1, 0, 3, 1, 1, 2, 1, 0, 1]
    },
    {
      name: "Example Influencer 4",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [0, 0, 2, 0, 1, 0, 2, 3, 0, 0]
    },
    {
      name: "Example Influencer 5",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [2, 1, 2, 3, 1, 2, 2, 3, 0, 1]
    },
    {
      name: "Example Influencer 6",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [2, 1, 1, 2, 1, 0, 2, 3, 3, 1]
    },
    {
      name: "Example Influencer 7",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [0, 0, 1, 3, 2, 0, 2, 2, 0, 1]
    },
    {
      name: "Example Influencer 8",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [3, 1, 2, 3, 1, 3, 2, 3, 0, 3]
    },
    {
      name: "Example Influencer 9",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [0, 3, 3, 3, 1, 2, 2, 3, 0, 1]
    },
    {
      name: "Example Influencer 10",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae.",
      preferAnswers: [0, 1, 2, 3, 1, 0, 0, 0, 0, 0]
    }
  ]

  currentQuestionId: number = 0;
  answers: Array<number> = []
  showResults: boolean = false;

  constructor() { }

  onVoted(option: number): void {
    this.answers.push(option);
    this.showResults = this.currentQuestionId === this.questions.length - 1;
    this.currentQuestionId = this.showResults ? this.currentQuestionId : this.currentQuestionId + 1;
  }

}
