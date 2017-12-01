import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material';
import { AboutusComponent } from './aboutus/aboutus.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  declarations: [AboutusComponent]
})

export class AboutUsModule { }
