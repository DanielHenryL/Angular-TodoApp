import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './page/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoComponent,
    AddTodoComponent,
    ListTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule
  ]
})
export class TodoModule { }
