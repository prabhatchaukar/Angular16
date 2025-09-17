import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipe } from '../CustomPipe/custom.pipe';



@NgModule({
  declarations: [ 
    CustomPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomPipe
  ]
})
export class PipesModule { }
