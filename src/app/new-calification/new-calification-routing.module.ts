import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCalificationPage } from './new-calification.page';

const routes: Routes = [
  {
    path: '',
    component: NewCalificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCalificationPageRoutingModule {}
