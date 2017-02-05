import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'components', loadChildren: './pages/components/components.module#ComponentsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
