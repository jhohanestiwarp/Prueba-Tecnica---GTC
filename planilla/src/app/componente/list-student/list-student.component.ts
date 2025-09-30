import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student, StudentDto } from 'src/app/models/student';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  public students: StudentDto[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.listStudents().subscribe(result => {
      console.log(result)
      this.students = result.data;
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
