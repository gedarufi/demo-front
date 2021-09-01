import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { ContentRoutingModule } from './content-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { SharedModule } from '../@shared/shared.module';
import { CourseService } from './course/course.service';
import { CourseListService } from './course-list/course-list.service';

@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
  ],
  providers: [
    CourseService,
    CourseListService
  ]
})
export class ContentModule { }
