import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslDialogBoardComponent } from './ssl-dialog-board.component';

describe('SslDialogBoardComponent', () => {
  let component: SslDialogBoardComponent;
  let fixture: ComponentFixture<SslDialogBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslDialogBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslDialogBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
