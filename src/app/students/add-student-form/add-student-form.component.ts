import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrl: './add-student-form.component.css',
})
export class AddStudentFormComponent {
  studentForm: FormGroup;

  constructor(fb: FormBuilder, private studentService: StudentsService) {
    this.studentForm = fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      mail: ['', [Validators.required, Validators.email]],
      img: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(300),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.studentForm.invalid) return;
    this.studentService.addStudent({
      id: this.studentService.students.length + 1,
      ...this.studentForm.value,
    });
  }
}
