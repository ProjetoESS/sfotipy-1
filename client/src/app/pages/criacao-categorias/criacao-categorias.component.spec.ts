import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoCategoriasComponent } from './criacao-categorias.component';

describe('CriacaoCategoriasComponent', () => {
  let component: CriacaoCategoriasComponent;
  let fixture: ComponentFixture<CriacaoCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
