import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabiExercicioComponent } from './databi-exercicio.component';

describe('DatabiExercicioComponent', () => {
  let component: DatabiExercicioComponent;
  let fixture: ComponentFixture<DatabiExercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabiExercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabiExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
