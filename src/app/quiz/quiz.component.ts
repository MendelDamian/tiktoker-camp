import { Component } from '@angular/core';
import { QuestionInterface } from './quiz-question/quiz-question.component';
import {ResultInterface} from './quiz-results/quiz-results.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
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
      title: "Example Influencer 1",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 2",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 3",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 4",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 5",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 6",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 7",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 8",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 9",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    },
    {
      title: "Example Influencer 10",
      imgSrc: "assets/dummy-img.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quae."
    }
  ]

  currentQuestionId: number = 0;
  answers: Array<number> = []
  showResults: boolean = false;

  constructor() { }

  onVoted(option: number): void {
    this.answers.push(option)
    this.showResults = this.currentQuestionId === this.questions.length - 1
    this.currentQuestionId = this.showResults ? this.currentQuestionId : this.currentQuestionId + 1
  }

}
