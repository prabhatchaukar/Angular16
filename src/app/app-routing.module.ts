import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPipesComponent } from './pipe/BuiltIn/built-in-pipes/built-in-pipes.component';
 
const routes: Routes = [
  {path:'BuiltIN',component:BuiltInPipesComponent},
  { path: '', redirectTo: '/pipes', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/pipes' } // fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 👈 routes register
  exports: [RouterModule]                 // 👈 RouterOutlet available
})
export class AppRoutingModule {}
