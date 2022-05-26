import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: [ './quiz-results.component.css' ]
})
export class QuizResultsComponent implements OnChanges {
  @Input() points: Array<number> = [];
  @Input('data') results: Array<ResultInterface> = [];
  result: ResultInterface = {
    name: '',
    imgSrc: '',
    content: '',
    preferAnswers: []
  };
  predictions: Array<number> = [];

  constructor() {
  }

  ngOnChanges(): void {
    this.result = this.getResult();
  }

  getResult(): ResultInterface {
    this.results.forEach((influ, influ_id) => {
      this.predictions.push(0);
      this.points.forEach((point, point_id) => {
        if (point === influ.preferAnswers[point_id]) {
          this.predictions[influ_id] += influ.preferAnswers[point_id];
        }
      });
    });

    let id: number = this.predictions.indexOf(Math.max(...this.predictions));
    return this.results[id];
  }

}

export interface ResultInterface {
  name: string,
  imgSrc: string,
  content: string,
  preferAnswers: Array<number>
}
