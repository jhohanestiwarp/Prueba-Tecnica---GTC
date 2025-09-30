import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  public students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.listStudents().subscribe(result => {
      this.students = result;
    });
  }

  deleteStudent(id: number, index: number): void {
    if (window.confirm('¿Desea borrar el registro?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.students.splice(index, 1);
      });
    }
  }
}
