import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RegularLayoutComponent } from './layout/regular-layout/regular-layout.component';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    component: RegularLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'content',
        loadChildren: () => import('../app/content/content.module').then(m => m.ContentModule),
      },
    ],
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../app/user/user.module').then(m => m.UserModule)
      }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'content' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
