import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, JwtPayload } from 'src/app/auth.service';
import { HomeService } from './home.service';
import { CourseEnrollment } from '../../@shared/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courseList: Observable<CourseEnrollment[]> = new Observable<CourseEnrollment[]>();

  constructor(
    protected authSrv: AuthService,
    protected homeSrv: HomeService,
  ) { }

  ngOnInit(): void {
    this.LoadUserInfo();
  }

  LoadUserInfo() {
    const user = this.authSrv.getPayload() as JwtPayload;

    this.courseList = this.homeSrv.getCoursesByEnrollments(user.id);
  }

}
