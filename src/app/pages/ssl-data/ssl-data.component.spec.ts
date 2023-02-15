import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslDataComponent } from './ssl-data.component';

describe('SslDataComponent', () => {
  let component: SslDataComponent;
  let fixture: ComponentFixture<SslDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
