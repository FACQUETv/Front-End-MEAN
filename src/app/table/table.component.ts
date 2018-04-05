import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import ToDo from '../models/todo.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private currentPage : number
  private buttonStatus : boolean
  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private todoService: TodoService
  ) {
    this.currentPage = 1
   }

    //Declaring the new todo Object and initilizing it
    public newTodo: ToDo = new ToDo()

    //An Empty list for the visible todo list
    todosList: ToDo[];

  ngOnInit() {

      //At component initialization the 
      this.todoService.getToDos(this.currentPage.toString()).subscribe(todos => {
        //assign the todolist property to the proper http response
        this.todosList = todos
        console.log(todos)
      })
    
    }

  paginPlus(){
    this.currentPage++
    console.log(this.currentPage)
    this.ngOnInit()
  }

  paginMoins(){
    if (this.currentPage > 1){
      this.currentPage--
      console.log(this.currentPage)
      this.ngOnInit()      
    }
  }

}
