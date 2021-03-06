import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
    
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos!: Todo[]
  message: string
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become Angular expert', false, new Date()),
  //   new Todo(3, 'Exercise outside', false, new Date())
  // ]

  constructor(
    private service:TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.service.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.service.deleteTodo('in28minutes',id).subscribe(
      response =>{
        console.log(response);
        this.message=`Todo ${id} deleted successfully`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }


}
