import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificationsPageRoutingModule } from './califications-routing.module';

import { CalificationsPage } from './califications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificationsPageRoutingModule
  ],
  declarations: [CalificationsPage]
})
export class CalificationsPageModule {}
