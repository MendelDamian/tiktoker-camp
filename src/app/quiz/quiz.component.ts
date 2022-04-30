import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Array<{ title: string, imgSrc: string, answers: Array<string> }> = [
    {
      "title": "Example question 1?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 2?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 3?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 4?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 5?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 6?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 7?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 8?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 9?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
    {
      "title": "Example question 10?",
      "imgSrc": "assets/dummy-img.png",
      "answers": [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    },
  ]
  currentQuestionId: number = 0;
  answers: Array<number> = []

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(option: number): void {
    this.answers.push(option)
    this.currentQuestionId++

    if (this.currentQuestionId === 10) {

    }
  }

}
