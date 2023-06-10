import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetalisComponent } from './movie-detalis.component';

describe('MovieDetalisComponent', () => {
  let component: MovieDetalisComponent;
  let fixture: ComponentFixture<MovieDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
