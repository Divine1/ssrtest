import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingmainComponent } from './components/landingmain/landingmain.component';

const routes: Routes = [
  {
    path : "", component : LandingmainComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingModule { }
