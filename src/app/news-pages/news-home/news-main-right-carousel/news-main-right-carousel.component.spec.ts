import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMainRightCarouselComponent } from './news-main-right-carousel.component';

describe('NewsMainRightCarouselComponent', () => {
  let component: NewsMainRightCarouselComponent;
  let fixture: ComponentFixture<NewsMainRightCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMainRightCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMainRightCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
