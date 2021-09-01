import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
      ],
      providers: [ AuthService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled the login button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const inpEmail = compiled.querySelector('input[type="email"]') as HTMLFormElement;
    const inpPassword = compiled.querySelector('input[type="password"]') as HTMLFormElement;

    expect(inpEmail).toBeDefined();
    expect(inpPassword).toBeDefined();
    expect(component.form.valid).toBeFalse();

    inpEmail.value = 'gedarufi';
    inpPassword.value = '1234';

    fixture.detectChanges();

    expect(component.form.valid).toBeFalse();
  });
});
