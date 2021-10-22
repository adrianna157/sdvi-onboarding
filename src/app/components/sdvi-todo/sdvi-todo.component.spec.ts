import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdviTodoComponent } from './sdvi-todo.component';

describe('SdviTodoComponent', () => {
  let component: SdviTodoComponent;
  let fixture: ComponentFixture<SdviTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdviTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdviTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
