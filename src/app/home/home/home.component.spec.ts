import { AuthService } from './../../auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockAuthSrv = jasmine.createSpyObj(
    'AuthService',
    ['getPayload']
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ HomeComponent ],
      providers: [
        HomeService,
        {
          provide: AuthService,
          useValue: mockAuthSrv
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    mockAuthSrv.getPayload.and.returnValue({
      "id": 326,
      "email": "juan@gcfglobal.org",
      "fullName": "Juan Pérez",
      "iat": 1630345630335,
      "exp": 1630360030335
    });

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
