import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTestComponent } from './position-test.component';

describe('PositionTestComponent', () => {
  let component: PositionTestComponent;
  let fixture: ComponentFixture<PositionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
