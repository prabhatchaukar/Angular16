import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 add this
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,    // 👈 now ngIf, ngFor etc. will work
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ]
})
export class DashboardModule {}
