import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  todoArray: Task[] = [{
    title: "Prueba",
    place: 1,
    description: "ESTO ES UNA PRUEBA"
  }];

  inProgressArray: Task[] = [];

  inTestingrray: Task[] = [];

  doneArray: Task[] = [];

  constructor() { }
  addTask(t: Task) {
    switch (t.place) {
      case 1:
        this.todoArray.push(t);
        break;
      case 2:
        this.inProgressArray.push(t);
        break;
      case 3:
        this.inTestingrray.push(t);
        break;
      case 4:
        this.doneArray.push(t);
        break;
      default:
        break;
    }
  }
  moveTaskRight(task: Task) {
    switch (task.place) {
      case 1:
        this.todoArray.splice(this.todoArray.indexOf(task), 1)
        task.place = 2;
        this.inProgressArray.push(task);
        break;
      case 2:
        this.inProgressArray.splice(this.inProgressArray.indexOf(task), 1)
        task.place = 3;
        this.inTestingrray.push(task);

        break;
      case 3:
        this.inTestingrray.splice(this.inTestingrray.indexOf(task), 1)
        task.place = 4;
        this.doneArray.push(task);
        break;
      default:
        break;
    }

  }
  moveTaskLeft(task: Task) {
    switch (task.place) {
      case 2:
        this.inProgressArray.splice(this.inProgressArray.indexOf(task), 1)
        task.place = 1;
        this.todoArray.push(task);
        break;
      case 3:
        this.inTestingrray.splice(this.inTestingrray.indexOf(task), 1)
        task.place = 2;
        this.inProgressArray.push(task);
        break;
      case 4:
        this.doneArray.splice(this.doneArray.indexOf(task), 1)
        task.place = 3;
        this.inTestingrray.push(task);
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
