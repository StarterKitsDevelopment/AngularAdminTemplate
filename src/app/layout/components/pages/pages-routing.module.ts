import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './employee/form/form.component';
import { JobComponent } from './employee/job/job.component';
import { FileImageComponent } from './file-image/file-image.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'activities', component: ActivitiesComponent,
    },
    {
      path: 'contacts', component: ContactComponent
    },
    {
      path: 'employee/job', component: JobComponent
    },
    {
      path: 'employee/form', component: FormComponent,
    },
    {
      path: 'file-image', component: FileUploadComponent
    },
    {
      path: 'file-upload', component: FileImageComponent
    },
    {
      path: 'school', component: SchoolComponent
    },
    {
      path: 'student', component: StudentComponent
    }
  ])],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
