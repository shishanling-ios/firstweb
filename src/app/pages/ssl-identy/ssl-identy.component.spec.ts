import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslIdentyComponent } from './ssl-identy.component';

describe('SslIdentyComponent', () => {
  let component: SslIdentyComponent;
  let fixture: ComponentFixture<SslIdentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslIdentyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslIdentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
