import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClassMemoryComponent } from './register-class-memory.component';

describe('RegisterClassMemoryComponent', () => {
  let component: RegisterClassMemoryComponent;
  let fixture: ComponentFixture<RegisterClassMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClassMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClassMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
