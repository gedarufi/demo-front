import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  isProfileMenuCollapsed = true;
  isLogued = false;
  user: any;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected authSrv: AuthService,
  ) { }

  ngOnInit(): void {
    this.InitHeader();
  }

  InitHeader() {
    this.isLogued = this.authSrv.isLogued;
    this.isProfileMenuCollapsed = true;

    if (this.isLogued) {
      this.user = this.authSrv.getPayload();
    }
  }

  signOut() {
    this.authSrv.logout();
    this.InitHeader();

    this.router.navigateByUrl('/content');
  }
}
