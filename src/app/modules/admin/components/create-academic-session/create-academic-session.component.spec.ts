import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcademicSessionComponent } from './create-academic-session.component';

describe('CreateAcademicSessionComponent', () => {
  let component: CreateAcademicSessionComponent;
  let fixture: ComponentFixture<CreateAcademicSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcademicSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcademicSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
