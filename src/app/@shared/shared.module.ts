import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseAvailableComponent } from './course-available/course-available.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseItemComponent,
    CourseAvailableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CourseItemComponent,
    CourseAvailableComponent,
  ]
})
export class SharedModule { }
