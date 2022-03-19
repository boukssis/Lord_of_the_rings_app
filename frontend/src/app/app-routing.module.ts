import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { config } from 'src/config';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HasRoleGuard } from './shared/guards/has-role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/home',
    pathMatch: 'full',
  },

  {
    path: 'public',
    canActivate: [HasRoleGuard],
    component: HomePageComponent,
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
    data: {
      role: config.authRoles.sa,
    },
  },

  {
    path: '**',
    redirectTo: 'public/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
