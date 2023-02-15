import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMainCenterCarouselComponent } from './news-main-center-carousel.component';

describe('NewsMainCenterCarouselComponent', () => {
  let component: NewsMainCenterCarouselComponent;
  let fixture: ComponentFixture<NewsMainCenterCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMainCenterCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMainCenterCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
