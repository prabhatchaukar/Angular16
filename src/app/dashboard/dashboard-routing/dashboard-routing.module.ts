import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent } // /dashboard → DashboardComponent
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DashboardRoutingModule { }
