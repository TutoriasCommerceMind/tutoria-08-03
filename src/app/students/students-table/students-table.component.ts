import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../../student.interface';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.css',
})
export class StudentsTableComponent {
  students: Student[] = [];
  constructor(private studentsService: StudentsService) {
    this.students = this.studentsService.getStudents();
  }

  deleteStudent(id: number): void {
    this.studentsService.deleteStudent(id);
    this.students = this.studentsService.getStudents();
  }
}
