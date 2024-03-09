import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsTableComponent } from './students/students-table/students-table.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { StudentsMainPageComponent } from './students/students-main-page/students-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsMainPageComponent,
  },
  {
    path: 'student/:id',
    component: StudentDetailComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
