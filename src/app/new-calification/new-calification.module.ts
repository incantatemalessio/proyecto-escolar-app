import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCalificationPageRoutingModule } from './new-calification-routing.module';

import { NewCalificationPage } from './new-calification.page';
import { ReactiveFormsModule } from '@angular/forms';

export class AppModule { }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCalificationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewCalificationPage]
})
export class NewCalificationPageModule { }
