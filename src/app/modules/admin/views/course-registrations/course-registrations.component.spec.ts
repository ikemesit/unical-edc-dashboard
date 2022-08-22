import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistrationsComponent } from './course-registrations.component';

describe('CourseRegistrationsComponent', () => {
  let component: CourseRegistrationsComponent;
  let fixture: ComponentFixture<CourseRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegistrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
