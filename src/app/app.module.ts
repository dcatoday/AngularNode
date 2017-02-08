import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
// import { ComponentsComponent } from './pages/components/components.component';
// import { StepProgressBarComponent } from './components/step-progress-bar/step-progress-bar.component';
import { SharedModule } from './pages/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
