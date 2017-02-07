import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { StepProgressBarComponent } from '../components/step-progress-bar/step-progress-bar.component';
import { ImageLoaderComponent } from '../components/image-loader/image-loader.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ 
                    StepProgressBarComponent,
                    ImageLoaderComponent, ],
  exports:      [ StepProgressBarComponent, ImageLoaderComponent,
                  CommonModule, FormsModule ]
})
export class SharedModule { }