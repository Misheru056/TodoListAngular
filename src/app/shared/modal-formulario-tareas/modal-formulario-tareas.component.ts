import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-formulario-tareas',
  templateUrl: './modal-formulario-tareas.component.html',
  styleUrls: ['./modal-formulario-tareas.component.scss']
})
export class ModalFormularioTareasComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _srvTask: TaskService, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  fData: FormData = new FormData();
  task: Task = {} as Task;

  ngOnInit(): void {
  }
  taskData: FormGroup = this._fb.group({
    titleTask: ['', [Validators.required]],
    descriptionTask: ['', [Validators.required]]
  })
  onClose(): void {
    this.dialog.closeAll();
  }

  createTask() {
    if (this.taskData.invalid) {
      this.taskData.markAllAsTouched();
    } else {
      this.task = {
        title: this.taskData.value.titleTask,
        description: this.taskData.value.descriptionTask,
        place: this.data
      };
      this._srvTask.addTask(this.task);
    }
    this.onClose();
  }
}
