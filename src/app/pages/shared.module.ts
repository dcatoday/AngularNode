import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { StepProgressBarComponent } from '../components/step-progress-bar/step-progress-bar.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ StepProgressBarComponent ],
  exports:      [ StepProgressBarComponent,
                  CommonModule, FormsModule ]
})
export class SharedModule { }