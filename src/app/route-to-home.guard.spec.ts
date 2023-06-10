import { TestBed } from '@angular/core/testing';

import { RouteToHomeGuard } from './route-to-home.guard';

describe('RouteToHomeGuard', () => {
  let guard: RouteToHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteToHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
