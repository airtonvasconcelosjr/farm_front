import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFazendaComponent } from './excluir-fazenda.component';

describe('ExcluirFazendaComponent', () => {
  let component: ExcluirFazendaComponent;
  let fixture: ComponentFixture<ExcluirFazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirFazendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
