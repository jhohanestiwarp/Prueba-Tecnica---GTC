import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStudentComponent } from './componente/add-student/add-student.component';
import { EditStudentComponent } from './componente/edit-student/edit-student.component';
import { ListStudentComponent } from './componente/list-student/list-student.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-student' },

  // Student routes
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'list-student', component: ListStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
