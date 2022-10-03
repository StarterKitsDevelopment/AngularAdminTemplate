import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import { JobComponent } from './employee/job/job.component';
import { FormComponent } from './employee/form/form.component';
import { FileImageComponent } from './file-image/file-image.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    ActivitiesComponent,
    ContactComponent,
    JobComponent,
    FormComponent,
    FileImageComponent,
    FileUploadComponent,
    SchoolComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
