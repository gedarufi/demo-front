import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { RegularLayoutComponent } from './regular-layout/regular-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SimpleLayoutComponent,
    RegularLayoutComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
