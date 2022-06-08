import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './ui/layouts/client-layout/client-layout.component';
import { CategoryComponent } from './ui/pages/category/category.component';
import { HomeComponent } from './ui/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'category', component: CategoryComponent },
    ],
  },

  { path: '***', redirectTo: 'client', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
