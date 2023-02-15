import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMianTabbarComponent } from './news-mian-tabbar.component';

describe('NewsMianTabbarComponent', () => {
  let component: NewsMianTabbarComponent;
  let fixture: ComponentFixture<NewsMianTabbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMianTabbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMianTabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
