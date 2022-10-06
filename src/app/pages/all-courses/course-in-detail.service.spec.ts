import { TestBed } from '@angular/core/testing';

import { CourseInDetailService } from './course-in-detail.service';

describe('CourseInDetailService', () => {
  let service: CourseInDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
