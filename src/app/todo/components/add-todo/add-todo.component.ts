import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  public myForm:FormGroup = new FormGroup({
    description: new FormControl('',[Validators.required, Validators.minLength(1)]),
  })

  @Output()
  public onNewTodo:EventEmitter<Todo> = new EventEmitter();

  @Output()
  public onUpdateTodo:EventEmitter<Todo> = new EventEmitter();


  @Input()
  public todo:Todo = {
    description:''
  }

  emitTodo( id? :string):void{
    if( this.myForm.invalid ) return;
    if ( id ) {
      const todo = { ...this.myForm.value, _id:id}
      this.onUpdateTodo.emit( todo );
    }else{
      this.onNewTodo.emit( this.myForm.value );
    }

    this.myForm.setValue({description:''})
  }

}
