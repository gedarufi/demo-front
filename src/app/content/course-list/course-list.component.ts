import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import { Course } from '../../@shared/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses!: Observable<Course[]>;

  constructor(
    protected courseListSrv: CourseListService
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courses = this.courseListSrv.getCourses();
  }
}
