import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMianRightComponent } from './news-mian-right.component';

describe('NewsMianRightComponent', () => {
  let component: NewsMianRightComponent;
  let fixture: ComponentFixture<NewsMianRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMianRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMianRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
