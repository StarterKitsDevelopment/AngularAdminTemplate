import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';

const modules = [
  DropdownModule,
  InputTextModule,
  SidebarModule,
  BadgeModule,
  RadioButtonModule,
  InputSwitchModule,
  RippleModule,
  ButtonModule,
  MenuModule,
  MenubarModule
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
