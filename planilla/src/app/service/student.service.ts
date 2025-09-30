import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private Api: string = 'http://localhost:8090/api/student';

  constructor(private clienteHttp: HttpClient) {}

  addStudent(data: Student): Observable<Student> {
    return this.clienteHttp.post<Student>(this.Api, data);
  }

  listStudents(): Observable<Student[]> {
    return this.clienteHttp.get<Student[]>(this.Api);
  }

  deleteStudent(id: number): Observable<void> {
    return this.clienteHttp.delete<void>(`${this.Api}/${id}`);
  }

  getStudent(id: number): Observable<Student> {
    return this.clienteHttp.get<Student>(`${this.Api}/${id}`);
  }

  updateStudent(data: Student): Observable<Student> {
    return this.clienteHttp.put<Student>(this.Api, data);
  }
}
