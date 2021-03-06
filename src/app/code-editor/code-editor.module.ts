import { AutoFocusDirective } from './../directives/auto-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CodeEditorComponent,
    AutoFocusDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CodeEditorComponent
  ]
})
export class CodeEditorModule { }
