import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './pipe/BuiltIn/built-in-pipes/built-in-pipes.component';
import { PipesModule } from './pipe/pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponentComponent } from './decorators/demo-component/demo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    LoginComponent,
    RegisterComponent,
    DemoComponentComponent,
  ],
  imports: [
    BrowserModule,
    PipesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
