import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'list-todo',
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {

  @Input()
  public todos:Todo[] = [];

  @Output()
  public deleteById:EventEmitter<string> = new EventEmitter();

  @Output()
  public todoById:EventEmitter<string> = new EventEmitter();

  onDelete( id?:string ){
    this.deleteById.emit( id );
  }

  onTodoById( id?:string ){
    this.todoById.emit( id );
  }
}
