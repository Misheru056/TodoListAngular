import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ModalFormularioTareasComponent } from './shared/modal-formulario-tareas/modal-formulario-tareas.component';
import { Task } from './shared/task.interface';
import { TaskService } from './shared/task.service';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'TodoList';

  arrayTodo() {
    return this._srvTask.getTodoArray();
  }
  arrayInProgress() {
    return this._srvTask.getInProgressArray();
  }

  arrayInTesting() {
    return this._srvTask.getInTestingArray();
  }
  arrayDone() {
    return this._srvTask.getDoneArray();
  }
  constructor(private dialog: MatDialog, private _srvTask: TaskService) {
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer.data, event.container.data,
        event.previousIndex,
        event.currentIndex)
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    // console.log(this.arrayTodo(), this.arrayInProgress(), this.arrayInTesting(), this.arrayDone())
  }

  openDialog(lugar: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = lugar;
    this.dialog.open(ModalFormularioTareasComponent, dialogConfig);
  }

  moveForward(event: Event) {
    console.log(event)
    
    console.log((<HTMLElement>event.currentTarget).parentElement?.parentElement?.parentElement?.parentElement?.nextSibling?.appendChild((<HTMLElement>event.currentTarget).parentElement?.parentElement?.parentElement!));
    // console.log(this.arrayTodo(), this.arrayInProgress(), this.arrayInTesting(), this.arrayDone())
  }
  moveBack(event: Event) {
    console.log((<HTMLElement>event.currentTarget).parentElement?.parentElement?.parentElement?.parentElement?.previousElementSibling?.appendChild((<HTMLElement>event.currentTarget).parentElement?.parentElement?.parentElement!));
    console.log(this.arrayTodo(), this.arrayInProgress(), this.arrayInTesting(), this.arrayDone())
  }

}
