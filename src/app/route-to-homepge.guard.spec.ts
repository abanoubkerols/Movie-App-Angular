import { TestBed } from '@angular/core/testing';

import { RouteToHomepgeGuard } from './route-to-homepge.guard';

describe('RouteToHomepgeGuard', () => {
  let guard: RouteToHomepgeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteToHomepgeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
