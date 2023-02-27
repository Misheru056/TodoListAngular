import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  todoArray: Task[] = [{
    title: "Prueba",
    place: "new",
    description: "ESTO ES UNA PRUEBA"
  }];

  inProgressArray: Task[] = [];

  inTestingrray: Task[] = [];

  doneArray: Task[] = [];

  constructor() { }
  addTask(t: Task) {
    switch (t.place) {
      case "new":
        this.todoArray.push(t);
        break;
      case "progress":
        this.inProgressArray.push(t);
        break;
      case "testing":
        this.inTestingrray.push(t);
        break;
      case "done":
        this.doneArray.push(t);
        break;
      default:
        break;
    }
  }
  getTodoArray(): Array<Task> {
    return this.todoArray;
  }
  getInProgressArray(): Array<Task> {
    return this.inProgressArray;
  }
  getInTestingArray(): Array<Task> {
    return this.inTestingrray;
  }
  getDoneArray(): Array<Task> {
    return this.doneArray;
  }

}
