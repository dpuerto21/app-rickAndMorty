import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgPipePipe } from './img-pipe.pipe';
import { ObjetToarrayPipe } from './objet-toarray.pipe';



@NgModule({
  declarations: [
    ImgPipePipe,
    ObjetToarrayPipe
  ],
  imports: [
    CommonModule
    ],
    exports: [
        ImgPipePipe,
        ObjetToarrayPipe
  ]
})
export class PipesModule { }
