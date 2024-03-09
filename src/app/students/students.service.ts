import { Injectable } from '@angular/core';
import { Student } from '../student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [
    {
      id: 1,
      fullName: 'Mark',
      mail: 'mark@mail.com',
      img: 'https://images.generated.photos/FnGJcNjNv3Z7EhRmduWuEoUWsdZRm1QgisEsDmmKT0I/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODQ3NTMxLmpwZw.jpg',
    },
    {
      id: 2,
      fullName: 'John',
      mail: 'john@mail.com',
      img: 'https://images.generated.photos/r6brih4AO67Y4CZpwSI6Tfa-9As5yoQDwF6s3fTARis/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTc3MjM3LmpwZw.jpg',
    },
    {
      id: 3,
      fullName: 'Jane',
      mail: 'jane@mail.com',
      img: 'https://images.generated.photos/XetQ6pRVpI6Q46osU_TjzEwfbJvtEcs71QYLUgo1Ozk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTY2NTMwLmpwZw.jpg',
    },
    {
      id: 4,
      fullName: 'Jack',
      mail: 'jack@mail.com',
      img: 'https://images.generated.photos/0jT7Eyc_dhwz9ucrXzYC8YMvfAQpPLaGej1iG6GFFew/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTk4MDMxLmpwZw.jpg',
    },
  ];

  constructor() {}

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find((student) => student.id == id);
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter((student) => student.id !== id);
  }
}
