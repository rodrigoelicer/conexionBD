import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OrdenesComponent } from './ordenes/ordenes.component';

const routes: Routes = [
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
