import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCorouselComponent } from './movies-corousel.component';

describe('MoviesCorouselComponent', () => {
  let component: MoviesCorouselComponent;
  let fixture: ComponentFixture<MoviesCorouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesCorouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesCorouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
