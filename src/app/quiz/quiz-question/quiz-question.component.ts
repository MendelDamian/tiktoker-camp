import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent {
  @Input() data: QuestionInterface = {
    title: 'Example title',
    imgSrc: 'assets/dummy-img.png',
    answers: [
      'Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'
    ]
  }
  @Output() voted = new EventEmitter<number>();
  didVote: boolean = false;

  constructor() { }

  vote(option: number) {
    this.voted.emit(option);
    this.didVote = true;
  }

}

export interface QuestionInterface {
  title: string,
  imgSrc: string,
  answers: Array<string>
}
