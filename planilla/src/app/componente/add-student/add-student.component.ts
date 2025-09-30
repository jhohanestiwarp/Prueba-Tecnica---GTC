import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  formStudent: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private studentService: StudentService,
    private ruteador: Router
  ) {
    this.formStudent = this.formulario.group({
      firstName: [''],
      lastName: [''],
      documentType: [''],
      document: [''],
      age: [''],
      email: [''],
      state: [''],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  ngOnInit(): void {}

  enviarDatos(): void {
    this.studentService.addStudent(this.formStudent.value).subscribe(() => {
      alert('Registro agregado con éxito');
      this.ruteador.navigateByUrl('/list-student');
    });
  }

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
