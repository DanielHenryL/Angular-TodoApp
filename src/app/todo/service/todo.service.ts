import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environmet } from '../../../environments/environments';
import { Observable } from 'rxjs';
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

}
