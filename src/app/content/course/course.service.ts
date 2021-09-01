import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { Course } from '../../@shared/course';

@Injectable()
export class CourseService {
  constructor(protected http: HttpClient) {}

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(
      `${environment.ApiUrl}/courses/${id}`
    ).pipe(
      map((c: Course) => {
        c.pages = c.pages.map(p => {
          p.content = p.content.split('src="/recursos/').join(`src="${environment.PublicUrl}/recursos/`);

          return p;
        });


        return c;
      })
    );
  }
}
