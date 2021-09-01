import { Course } from './../../@shared/course';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CourseService } from './course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  course$!: Observable<Course>;

  constructor(
    route: ActivatedRoute,
    protected courseSrv: CourseService,
  ) {
    route.paramMap.subscribe(params => this.loadCourse(params.get('id') as string));
  }

  loadCourse(id: string): void {
    this.course$ = this.courseSrv.getCourse(id);
  }
}
