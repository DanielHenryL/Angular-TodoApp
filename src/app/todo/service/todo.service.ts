import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environmet } from '../../../environments/environments';
import { Observable, catchError, of, retry } from 'rxjs';
import { Todo } from '../interfaces/todo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private httpClient = inject(HttpClient);
  private baseUrl = environmet.baseUrl;

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${ this.baseUrl }`)
  }

  createTodo( todo:Todo ):Observable<Todo>{
    return this.httpClient.post<Todo>(`${ this.baseUrl }`, todo )
  }

  deleteTodo( id:string ) :Observable<Todo>{
    return this.httpClient.delete<Todo>(`${ this.baseUrl }/${ id }`)
  }

}
