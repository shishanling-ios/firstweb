import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMianLeftComponent } from './news-mian-left.component';

describe('NewsMianLeftComponent', () => {
  let component: NewsMianLeftComponent;
  let fixture: ComponentFixture<NewsMianLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMianLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMianLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
