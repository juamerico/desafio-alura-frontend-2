import { HamburgerMenuModule } from './../hamburger-menu/hamburger-menu.module';
import { UserModule } from './../user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    HamburgerMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
