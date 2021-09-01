import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';
import { CourseEnrollment } from '../../@shared/course';

@Injectable()
export class HomeService {
  constructor(protected http: HttpClient) {}

  getCoursesByEnrollments(userId: number): Observable<CourseEnrollment[]> {
    return this.http.get<CourseEnrollment[]>(
      `${environment.ApiUrl}/users/${userId}/courses`
    );
  }
}
