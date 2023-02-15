import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslSidebarComponent } from './ssl-sidebar.component';

describe('SslSidebarComponent', () => {
  let component: SslSidebarComponent;
  let fixture: ComponentFixture<SslSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
