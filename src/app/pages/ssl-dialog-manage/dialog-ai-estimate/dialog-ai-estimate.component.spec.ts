import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAiEstimateComponent } from './dialog-ai-estimate.component';

describe('DialogAiEstimateComponent', () => {
  let component: DialogAiEstimateComponent;
  let fixture: ComponentFixture<DialogAiEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAiEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAiEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
