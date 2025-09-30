export class Student {
  id!: number;
  firstName!: string;
  lastName!: string;
  documentType!: string;
  document!: string;
  age!: number;
  email!: string;
  state!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

export class StudentDto {
  id!: number;
  fullName!: string;
  document!: string;
  age!: number;
  email!: string;
  state!: string;
  createdAt!: Date;
}
