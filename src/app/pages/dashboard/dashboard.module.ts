import { NgModule }            from '@angular/core';

// import { SharedModule }        from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent }       from './dashboard.component';

import { SharedModule } from '../shared.module';


@NgModule({
  imports: [ DashboardRoutingModule, SharedModule ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
