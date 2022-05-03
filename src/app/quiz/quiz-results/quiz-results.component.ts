import { Component, Input, OnChanges } from '@angular/core';

import { customHash } from '../../../mixins/functions';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnChanges {
  @Input() points: Array<number> = []
  @Input('data') results: Array<ResultInterface> = []
  result: ResultInterface = {
    title: '',
    imgSrc: '',
    content: ''
  }

  constructor() { }

  ngOnChanges(): void {
    this.result = this.getResult();
  }

  getResult(): ResultInterface {
    return this.results[customHash(this.points.join(' ')) % this.results.length];
  }

}

export interface ResultInterface {
  title: string,
  imgSrc: string,
  content: string
}
