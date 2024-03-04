import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'list-todo',
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {

  @Input()
  public todos:Todo[] = [
    {description:'hola',
  status:false}
  ];

}
