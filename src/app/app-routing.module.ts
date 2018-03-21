import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForecastHomeComponent } from './forecast-home/forecast-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/forecast', pathMatch: 'full' },
  { path: 'forecast', component: ForecastHomeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
