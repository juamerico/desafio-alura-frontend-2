import { UserModule } from './../shared/user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { CodeOutputComponent } from './code-output/code-output.component';



@NgModule({
  declarations: [
    CommunityComponent,
    CodeOutputComponent,
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    CommunityComponent
  ]
})
export class CommunityModule { }
