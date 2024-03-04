import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  public todos:Todo[] =[];
  public todo:Todo = {
    description:''
  }

  constructor( private todoService:TodoService){
    this.getTodos();
  }

  onCreateOrUpdateTodo( todo:Todo ){
    if(todo._id){
      const {_id , ...resto} = todo;
      this.todoService.updateTodo( _id , resto)
        .subscribe({
          next:(value) => {
            this.todos.map((todo)=>{
              if(todo._id === value._id){
                return value;
              }
              return todo;
            })
            this.getTodos();
          },
        })

    }else{
      this.todoService.createTodo(todo)
        .subscribe({
          next: (value) => {
            this.todos.push(value)
          },
      })
    }
  }

  getTodos(){
    this.todoService.getTodos()
    .subscribe({
      next: (value) => {
        this.todos = value
      }
    })
  }

  onTodoById( id:string ){
    this.todoService.getTodo( id )
    .subscribe({
      next: (value) => {
        this.todo = value
      },
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
