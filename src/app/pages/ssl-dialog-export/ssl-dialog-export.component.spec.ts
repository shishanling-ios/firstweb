import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslDialogExportComponent } from './ssl-dialog-export.component';

describe('SslDialogExportComponent', () => {
  let component: SslDialogExportComponent;
  let fixture: ComponentFixture<SslDialogExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslDialogExportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslDialogExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
