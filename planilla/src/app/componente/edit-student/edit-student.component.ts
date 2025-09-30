import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  formStudent: FormGroup;
  elID: number | null;

  constructor(
    private formulario: FormBuilder,
    private studentService: StudentService,
    private ruteador: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.elID = Number(this.activedRoute.snapshot.paramMap.get('id'));

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

    if (this.elID) {
      this.studentService.getStudent(this.elID).subscribe(result => {
        this.formStudent.setValue({
          firstName: result.firstName,
          lastName: result.lastName,
          documentType: result.documentType,
          document: result.document,
          age: result.age,
          email: result.email,
          state: result.state,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        });
      });
    }
  }

  ngOnInit(): void {}

  enviarDatos(): void {
    if (this.elID) {
      this.studentService
        .updateStudent({ id: this.elID, ...this.formStudent.value })
        .subscribe(() => {
          alert('Registro modificado con éxito');
          this.ruteador.navigateByUrl('/list-student');
        });
    }
  }
}
