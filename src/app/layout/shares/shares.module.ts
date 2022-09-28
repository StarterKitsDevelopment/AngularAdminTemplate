import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';

import { DropdownModule } from 'primeng/dropdown';

const modules = [
  DropdownModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharesRoutingModule,
    ...modules,
  ],
  exports: [...modules]
})

export class SharesModule { }
