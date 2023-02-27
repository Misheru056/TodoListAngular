import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormularioTareasComponent } from './modal-formulario-tareas.component';

describe('ModalFormularioTareasComponent', () => {
  let component: ModalFormularioTareasComponent;
  let fixture: ComponentFixture<ModalFormularioTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormularioTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormularioTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
