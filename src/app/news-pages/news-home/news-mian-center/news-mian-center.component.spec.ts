import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMianCenterComponent } from './news-mian-center.component';

describe('NewsMianCenterComponent', () => {
  let component: NewsMianCenterComponent;
  let fixture: ComponentFixture<NewsMianCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMianCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMianCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
