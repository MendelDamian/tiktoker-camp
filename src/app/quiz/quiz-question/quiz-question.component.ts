import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
  animations: [
    trigger('questionChange', [
      state('true', style({ transform: 'rotateX(10deg)', opacity: 0.2 })),
      state('false', style({ transform: 'rotateX(0deg)', opacity: 1 })),
      transition('false => true', animate('0.1s')),
      transition('true => false', animate('0.2s')),
    ])
  ]
})
export class QuizQuestionComponent implements OnChanges {
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

  ngOnChanges(): void {
    this.updateDidVote();
  }

  vote(option: number) {
    this.voted.emit(option);
    this.didVote = true;
  }

  async updateDidVote(): Promise<void> {
    await delay(100);
    this.didVote = false;
  }

}

export interface QuestionInterface {
  title: string,
  imgSrc: string,
  answers: Array<string>
}
