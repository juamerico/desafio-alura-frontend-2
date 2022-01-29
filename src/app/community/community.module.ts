import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModule } from './../shared/user/user.module';
import { CommunityComponent } from './community.component';
import { CodeOutputComponent } from './code-output/code-output.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';



@NgModule({
  declarations: [
    CommunityComponent,
    CodeOutputComponent,
  ],
  imports: [
    CommonModule,
    UserModule,
    HighlightModule
  ],
  exports: [
    CommunityComponent
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]
})
export class CommunityModule { }
