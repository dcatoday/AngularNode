import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss'],
})
export class StepProgressBarComponent implements OnChanges {
  @Input('steps') steps: Array<Object>;
  @Input('currentStep') currentStep: String;
  private currentStepIndex : number;
  private url:string = "https://raw.githubusercontent.com/dcatoday/AngularNode/master/src/app/components/step-progress-bar/step-progress-bar.component.scss";

  constructor(private http: Http) { }

  getStyles(): Promise<any> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  findIndex(array, property, value) {
    let position = 0;
    for(let x in array) {
      if(array[x][property] == value) {
        break;
      }
      position ++;
    }
    return position;
  }

  naviateLink(e) {
    if(e.currentTarget.className =='disabled'){
      e.preventDefault();
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['currentStep']) {
      this.currentStepIndex = this.findIndex(this.steps, 'title', changes['currentStep'].currentValue);
    }
  }

}
