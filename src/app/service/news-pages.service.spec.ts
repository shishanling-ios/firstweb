import { TestBed } from '@angular/core/testing';

import { NewsPagesService } from './news-pages.service';

describe('NewsPagesService', () => {
  let service: NewsPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
