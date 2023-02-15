import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslDialogManageComponent } from './ssl-dialog-manage.component';

describe('SslDialogManageComponent', () => {
  let component: SslDialogManageComponent;
  let fixture: ComponentFixture<SslDialogManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslDialogManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslDialogManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
