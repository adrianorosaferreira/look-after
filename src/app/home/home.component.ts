import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos/todo';
import { Category } from '../categories/category';
import { TodoDataService } from '../todos/todo-data.service';
import { CategoryDataService } from '../categories/category-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TodoDataService, CategoryDataService]
})
export class HomeComponent implements OnInit {

  newTodo: Todo = new Todo();
  newCategory: Category = new Category();
  selectedCategory: Category;

  constructor(private todoDataService: TodoDataService, private categoryDataService: CategoryDataService) {
  }


  addTodo() {
    this.newTodo.category = this.selectedCategory.id;
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    console.log(this.todos);
  }

  toggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: { id: number; }) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  get todosForCat() {
    return this.todoDataService.getTodoByCategory(this.selectedCategory.id);
  }

  countTodosByCat(id: number) {
    return this.todoDataService.getTodoByCategory(id).length;
  }

  addCategory() {
    this.categoryDataService.addCategory(this.newCategory);
    this.newCategory = new Category();
  }

  removeCategory(category: { id: number; }) {
    this.categoryDataService.deleteCategoryById(category.id);
  }

  get categories() {
    return this.categoryDataService.getAllCategories();
  }

  categoryById(id: number) {
    return this.categoryDataService.getCategoryById(id);
  }

  addInitialCategory(category: Category) {
    this.categoryDataService.addCategory(category);
  }

  addInitialTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }


  onSelect(category: Category): void {
    this.selectedCategory = category;
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
