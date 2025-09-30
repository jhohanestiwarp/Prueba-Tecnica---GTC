import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student, StudentDto } from '../models/student';
interface responseListDto{
  data: StudentDto[];
  message: String;
  status: Number;
}
interface responseDto{
  data: Student;
  message: String;
  status: Number;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private Api: string = 'http://localhost:8003/api/v1/students';

  constructor(private clienteHttp: HttpClient) {}

  addStudent(data: Student): Observable<Student> {
    return this.clienteHttp.post<Student>(this.Api, data);
  }

  listStudents(): Observable<responseListDto> {
    return this.clienteHttp.get<responseListDto>(this.Api);
  }

  deleteStudent(id: number): Observable<void> {
    return this.clienteHttp.delete<void>(`${this.Api}/${id}`);
  }

  getStudent(id: number): Observable<responseDto> {
    return this.clienteHttp.get<responseDto>(`${this.Api}/${id}`);
  }

  updateStudent(data: Student): Observable<Student> {
    return this.clienteHttp.put<Student>(`${this.Api}/${data.id}`, data);
  }
}
