import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPipesComponent } from './pipe/BuiltIn/built-in-pipes/built-in-pipes.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponentComponent } from './decorators/demo-component/demo-component.component';
import { UsersComponent } from './services/users/users.component';
import { ProductsComponent } from './services/products/products.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // ✅ single default
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'decorators',component: DemoComponentComponent},
  { path: 'services', component: UsersComponent},
  { path: 'dependencyInjection', component: ProductsComponent },
  {path: 'template-driven',component: TemplateValidationComponent},
  { path: 'react-validation', component: ReactiveValidationComponent},
  { path: 'pipes', component: BuiltInPipesComponent }, // ✅ route name fix
  { path: '**', redirectTo: '/login' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
