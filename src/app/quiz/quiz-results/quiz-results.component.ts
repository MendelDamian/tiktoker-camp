import { Component, Input, OnChanges } from '@angular/core';

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

  constructor() {
  }

  ngOnChanges(): void {
    this.result = this.getResult();
    }

  customHash(): number {
    let hash = 0;
    let data = this.points.join(' ');

    for (let i = 0; i < data.length; i++) {
      let char = data.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }

    return Math.abs(hash) ;
  }

  getResult(): ResultInterface {
    console.log(this.points);
    return this.results[this.customHash() % this.results.length];
  }

}

export interface ResultInterface {
  title: string,
  imgSrc: string,
  content: string
}
