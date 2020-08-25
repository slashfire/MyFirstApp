import { Component, OnInit } from '@angular/core';
// import { Todo } from '../models/to-do-list'
import { TodoDataService } from '../service/data/todo-data.service'
import { Router } from '@angular/router';

export class Todo {
  
  constructor(
       public id:number,public description:string,public done?: boolean,public targetDate?: Date, 
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
  message: string;
  constructor(private todoService: TodoDataService, private router: Router) { }
  ngOnInit(): void {
     this.refreshTodos();
    
  }

  deleteTodo(id){
    console.log(`delete to do ${id}`);
    this.todoService.deleteTodo('prabhakar',id).subscribe(
      response=>{
        console.log(response);
        this.message = "Delete Succesfull";
        this.refreshTodos();
      }
    )
  }
  refreshTodos(){
      this.todoService.retrieveAllTodos('Prabhakar').subscribe(
      response=>{
        // console.log(response);
        this.todos = response;
        console.log(this.todos);
      });
  }
  
  loadTodo(id){
    console.log("Iniside Load todo");
    this.router.navigate(['todo',id]);
  }
  addTodo(){
    this.router.navigate(['todo',-1]);
  }
}
