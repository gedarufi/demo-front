import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { Course } from '../../@shared/course';

@Injectable()
export class CourseListService {
  constructor(protected http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(
      `${environment.ApiUrl}/courses`
    );
  }
}
