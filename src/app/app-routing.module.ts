import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tarea',
    loadChildren:()=>import('./todo/todo.module').then( m => m.TodoModule)
  },
  {
    path:'**',
    redirectTo:'tarea'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
