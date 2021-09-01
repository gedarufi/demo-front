import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = {
      course: {
        id: 'A1',
        name: 'Inglés Básico',
        description: 'En este nivel aprenderás el vocabulario básico para dar tus primeros pasos en inglés. También descubrirás palabras y nuevas formas de expresarte en este idioma.',
        pages: [],
      },
      status: 'passed'
    };
    fixture.detectChanges();
  });

  it('should create and render a course enrollment', () => {
    expect(component).toBeTruthy();
  });
});
