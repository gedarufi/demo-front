import { AuthService } from './../../auth.service';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        CommonModule,
        NgbModule,
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      providers: [ AuthService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the navbar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header nav.navbar')).toBeDefined();
  });

  it('should contain 4 items in the navbar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelectorAll('header nav.navbar ul.navbar-nav li.nav-item')?.length
    ).toBe(3);
  });
});
