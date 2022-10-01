import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileImageRoutingModule } from './file-image-routing.module';
import { FileImageComponent } from './file-image.component';


@NgModule({
  declarations: [
    FileImageComponent
  ],
  imports: [
    CommonModule,
    FileImageRoutingModule
  ]
})
export class FileImageModule { }
