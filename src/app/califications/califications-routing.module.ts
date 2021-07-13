import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificationsPage } from './califications.page';

const routes: Routes = [
  {
    path: '',
    component: CalificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificationsPageRoutingModule {}
