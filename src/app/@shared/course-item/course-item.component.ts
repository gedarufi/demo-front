import { Component, Input, OnInit } from '@angular/core';
import { CourseEnrollment } from '../course';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input()
  course!: CourseEnrollment;

  constructor() { }

  ngOnInit(): void {
  }

  get status(): string {
    const status = {
      'passed': 'Aprobado',
      'failed': 'Desaprobado',
      'in-progress': 'En progreso',
    };

    return status[this.course.status];
  }
}
