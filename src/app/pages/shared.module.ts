import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { StepProgressBarComponent } from '../components/step-progress-bar/step-progress-bar.component';
import { ImageLoaderComponent } from '../components/image-loader/image-loader.component';
import { MenuCollapseComponent } from '../components/menu-collapse/menu-collapse.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ 
                    StepProgressBarComponent,
                    ImageLoaderComponent,
                    MenuCollapseComponent, ],
  exports:      [ StepProgressBarComponent, MenuCollapseComponent, ImageLoaderComponent,
                  CommonModule, FormsModule ]
})
export class SharedModule { }