import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { RouterModule } from '@angular/router';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { StudentsMainPageComponent } from './students-main-page/students-main-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsTableComponent,
    StudentDetailComponent,
    AddStudentFormComponent,
    StudentsMainPageComponent,
  ],
  exports: [StudentsTableComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class StudentsModule {}
