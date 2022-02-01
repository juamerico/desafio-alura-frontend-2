import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CommunityModule } from './community/community.module';
import { NavigationMenuModule } from './shared/navigation-menu/navigation-menu.module';
import { HeaderModule } from './shared/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { CodeEditorModule } from './code-editor/code-editor.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    CodeEditorModule,
    NavigationMenuModule,
    CommunityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
