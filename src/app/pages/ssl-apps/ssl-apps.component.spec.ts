import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslAppsComponent } from './ssl-apps.component';

describe('SslAppsComponent', () => {
  let component: SslAppsComponent;
  let fixture: ComponentFixture<SslAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
