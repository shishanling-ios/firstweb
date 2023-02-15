import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslHeaderComponent } from './ssl-header.component';

describe('SslHeaderComponent', () => {
  let component: SslHeaderComponent;
  let fixture: ComponentFixture<SslHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
