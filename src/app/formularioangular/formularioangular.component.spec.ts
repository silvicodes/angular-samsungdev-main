import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAngularComponent } from './formularioangular.component';

describe('FormularioAngularComponent', () => {
  let component: FormularioAngularComponent;
  let fixture: ComponentFixture<FormularioAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
