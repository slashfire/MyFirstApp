import { Component, OnInit } from '@angular/core';
// import { Todo } from '../models/to-do-list'
import { TodoDataService } from '../service/data/todo-data.service'

export class Todo {
  
  constructor(
       public id:number,public description:string,public done?: boolean,public targetdate?: Date, 
  ){

  }
} 

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoDataService) { }
  ngOnInit(): void {
     this.todoService.retrieveAllTodos('Prabhakar').subscribe(
      response=>{
        // console.log(response);
        this.todos = response;
        console.log(this.todos);
      }
    )
  }

  // todos = [
  //   new Todo(1,'Learn to Dance',false, new Date()),
  //   new Todo(2,'Learn to Sing',false, new Date()),
  //   new Todo(3,'Learn to Live',false, new Date())
  // ];
  
  
  
}
