import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDetailsShowComponent } from './msg-details-show.component';

describe('MsgDetailsShowComponent', () => {
  let component: MsgDetailsShowComponent;
  let fixture: ComponentFixture<MsgDetailsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgDetailsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgDetailsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
