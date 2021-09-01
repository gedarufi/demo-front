import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  returnUrl: string | boolean = false;

  constructor(
    fb: FormBuilder,
    route: ActivatedRoute,
    protected authSrv: AuthService,
    protected router: Router,
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    route.queryParams.subscribe(query => {
      if (!!query.returnUrl) {
        this.returnUrl = query.returnUrl;
      }
    });
  }

  login() {
    if (!this.form.valid) {
      return;
    }

    this.authSrv.login(this.form.value).subscribe(
      token => this.router.navigateByUrl(
        this.returnUrl ? this.returnUrl.toString() : '/home'
      )
    );
  }
}
