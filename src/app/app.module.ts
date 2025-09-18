import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './pipe/BuiltIn/built-in-pipes/built-in-pipes.component';
import { PipesModule } from './pipe/pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponentComponent } from './decorators/demo-component/demo-component.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersComponent } from './services/users/users.component';
import { ProductsComponent } from './services/products/products.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    LoginComponent,
    RegisterComponent,
    DemoComponentComponent,
    HighlightDirective,
    UsersComponent,
    ProductsComponent,
    TemplateValidationComponent,
    ReactiveValidationComponent,
    LifecycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    PipesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
