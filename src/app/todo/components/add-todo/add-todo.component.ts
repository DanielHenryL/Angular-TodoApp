import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../interfaces/todo.interfaces';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnChanges{

  public myForm:FormGroup = new FormGroup({
    description: new FormControl('',[Validators.required, Validators.minLength(1)]),
    status:new FormControl( false ),
  })

  @Output()
  public onNewTodo:EventEmitter<Todo> = new EventEmitter();

  @Output()
  public onUpdateTodo:EventEmitter<Todo> = new EventEmitter();

  @Input()
  public todo?:Todo;

  ngOnChanges(): void {
    this.myForm.patchValue({ ...this.todo })
  }

  emitTodo():void{
    if( this.myForm.invalid ) return;
    if( this.todo ){
      const todoUpdate = { ...this.myForm.value, _id:this.todo._id}
      this.onUpdateTodo.emit( todoUpdate )
    }else{
      this.onNewTodo.emit( this.myForm.value )
    }
    this.myForm.reset();
    this.todo = undefined;
  }

}
