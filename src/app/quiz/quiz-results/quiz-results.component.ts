import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
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

  constructor() {
  }

  ngOnChanges(): void {
    this.result = this.getResult();
  }

  getResult(): ResultInterface {
    // Pick random result with the highest points
    let predictions: Array<number> = [];
    this.results.forEach((influ, influ_id) => {
      predictions.push(0);
      this.points.forEach((point, point_id) => {
        if (point === influ.preferAnswers[point_id]) {
          predictions[influ_id]++;
        }
      });
    });

    let max = Math.max(...predictions);
    let indexes: Array<number> = [];
    predictions.forEach((prediction, index) => {
      if (prediction === max) {
        indexes.push(index);
      }
    });

    let id: number = indexes[Math.floor(Math.random() * indexes.length)];
    return this.results[id];
  }

}

export interface ResultInterface {
  name: string,
  imgSrc: string,
  content: string,
  preferAnswers: Array<number>
}
