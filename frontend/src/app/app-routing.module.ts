import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavContainerComponent } from './nav-container/nav-container.component';

const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
