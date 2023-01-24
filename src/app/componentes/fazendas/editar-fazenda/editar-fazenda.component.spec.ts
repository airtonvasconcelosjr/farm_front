import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFazendaComponent } from './editar-fazenda.component';

describe('EditarFazendaComponent', () => {
  let component: EditarFazendaComponent;
  let fixture: ComponentFixture<EditarFazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFazendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
