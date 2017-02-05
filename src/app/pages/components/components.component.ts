import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  private steps: Array<Object>;
  private currentStep: string;

  ngOnInit() {
    this.steps = [
      {
        title: "Search",
        url: "components"
      },
      {
        title: "Enter",
        url: "components"
      },
      {
        title: "Review",
        url: "components"
      },
      {
        title: "Confirm",
        url: "components"
      }
    ];
    this.currentStep = "Search";
  }

  stepList = ["Search","Enter","Review","Confirm"];
  changeStep(){
    let index = this.stepList.indexOf(this.currentStep);
    if (index  < this.stepList.length - 1) {
      this.currentStep = this.stepList[index + 1];
    } else {
      this.currentStep = this.stepList[0];
    }
  }

}
