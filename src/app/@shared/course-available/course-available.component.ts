import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'course-available',
  templateUrl: './course-available.component.html',
  styleUrls: ['./course-available.component.scss']
})
export class CourseAvailableComponent implements OnInit {
  @Input() course!: Course;

  constructor() { }

  ngOnInit(): void {
  }
}
