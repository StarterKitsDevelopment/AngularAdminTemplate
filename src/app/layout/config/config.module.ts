import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppConfigComponent } from './app.config.component';
import { SharesModule } from '../shares/shares.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharesModule,
    ],
    declarations: [
        AppConfigComponent
    ],
    exports: [
        AppConfigComponent
    ]
})
export class AppConfigModule { }
