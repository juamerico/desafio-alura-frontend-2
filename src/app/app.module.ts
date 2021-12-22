import { HttpClientModule } from '@angular/common/http';
import { NavigationMenuModule } from './shared/navigation-menu/navigation-menu.module';
import { HeaderModule } from './shared/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorModule } from './code-editor/code-editor.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
