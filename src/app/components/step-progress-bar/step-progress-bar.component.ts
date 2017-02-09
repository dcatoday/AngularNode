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
