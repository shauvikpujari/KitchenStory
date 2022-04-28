import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousorderComponent } from './previousorder.component';

describe('PreviousorderComponent', () => {
  let component: PreviousorderComponent;
  let fixture: ComponentFixture<PreviousorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
