import { Component, OnInit } from '@angular/core';

import { Category } from './category';
import { CategoryDataService } from './category-data.service';
import { Todo } from '../todos/todo';
import { TodoDataService } from '../todos/todo-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [ CategoryDataService, TodoDataService ]
})
export class CategoriesComponent implements OnInit {

  constructor(private todoDataService: TodoDataService, private categoryDataService: CategoryDataService) { }

  addInitialCategory(category: Category) {
    this.categoryDataService.addCategory(category);
  }

  addInitialTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  ngOnInit() {
    let initCat = new Category();
    initCat = {'name' : 'Today', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Tomorrow', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Work', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Holidays', 'id' : null , };
    this.addInitialCategory(initCat);
    initCat = {'name' : 'Shopping list', 'id' : null , };
    this.addInitialCategory(initCat);

    let initTodo = new Todo();
    initTodo = {'title' : 'Task1', 'complete': false, 'id' : null , category: 1 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Task2', 'complete': true, 'id' : null , category: 2 };
    this.addInitialTodo(initTodo);
    initTodo = {'title' : 'Task3', 'complete': true, 'id' : null , category: 1 };
    this.addInitialTodo(initTodo);
  }

}
