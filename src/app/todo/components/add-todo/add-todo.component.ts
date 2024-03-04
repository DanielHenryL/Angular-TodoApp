import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  public myForm:FormGroup = new FormGroup({
    description: new FormControl('',[Validators.required, Validators.minLength(1)])
  })

  @Output()
  public todoInput:EventEmitter<string> = new EventEmitter();

  onInput(  ):void{
    if( this.myForm.invalid ) return;

    if( this.myForm.controls['description'].value.length < 1 ) return;

    this.todoInput.emit( this.myForm.get('description')!.value );

    this.myForm.setValue({description:''})
  }

}
