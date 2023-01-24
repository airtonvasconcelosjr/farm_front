import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFazendaComponent } from './criar-fazenda.component';

describe('CriarFazendaComponent', () => {
  let component: CriarFazendaComponent;
  let fixture: ComponentFixture<CriarFazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFazendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
