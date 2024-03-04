import { Component, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  public todos:Todo[] =[];

  constructor( private todoService:TodoService){
    this.getTodo();
  }

  onInput( value:string ){

    const todo:Todo = {
      description:value,
      status:false
    }

    this.todoService.createTodo(todo)
      .subscribe({
        next: (value) => {
          this.todos.push(value)
        },
      })
  }

  getTodo(){
    this.todoService.getTodos()
    .subscribe({
      next: (value) => {
        this.todos = value
      }
    })
  }

  onDelete( id:string ){
    this.todoService.deleteTodo( id )
      .subscribe({
        next:(value) => {
          this.todos = this.todos.filter( (todo) =>todo._id !== value._id )
         },
      })
  }
}
