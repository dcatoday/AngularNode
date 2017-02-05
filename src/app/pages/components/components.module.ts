import { NgModule }            from '@angular/core';

// import { SharedModule }        from '../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent }       from './components.component';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [ ComponentsRoutingModule, SharedModule ],
  declarations: [
    ComponentsComponent,
  ]
})
export class ComponentsModule { }
