import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './pipe/BuiltIn/built-in-pipes/built-in-pipes.component';
import { PipesModule } from './pipe/pipes/pipes.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    
  ],
  imports: [
    BrowserModule,
    PipesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
