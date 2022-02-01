import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModule } from './../user/user.module';
import { NavigationMenuModule } from './../navigation-menu/navigation-menu.module';
import { HamburgerMenuComponent } from './hamburger-menu.component';


@NgModule({
  declarations: [
    HamburgerMenuComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    NavigationMenuModule
  ],
  exports: [
    HamburgerMenuComponent
  ]
})
export class HamburgerMenuModule { }
