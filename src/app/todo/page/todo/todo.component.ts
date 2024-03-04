import { Component, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  public todos:Todo[] =[]

  constructor( private todoService:TodoService){
    this.getTodo();
  }

  getTodo(){
    this.todoService.getTodos()
    .subscribe({
      next: (value) => {
        this.todos = value
      },
      error:(err)=> {
         console.log( err );
      },
    })
  }
}
