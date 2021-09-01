import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAvailableComponent } from './course-available.component';

describe('CourseAvailableComponent', () => {
  let component: CourseAvailableComponent;
  let fixture: ComponentFixture<CourseAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAvailableComponent);
    component = fixture.componentInstance;

    component.course = {
      id: 'A1',
      name: 'Inglés Básico',
      description: 'En este nivel aprenderás el vocabulario básico para dar tus primeros pasos en inglés. También descubrirás palabras y nuevas formas de expresarte en este idioma.',
      pages: [],
    };

    fixture.detectChanges();
  });

  it('should create and render the course information', () => {
    expect(component).toBeTruthy();
  });
});
