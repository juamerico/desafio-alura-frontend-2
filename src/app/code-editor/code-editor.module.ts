import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor.component';
import { CodeInputComponent } from './code-input/code-input.component';



@NgModule({
  declarations: [
    CodeEditorComponent,
    CodeInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeEditorComponent
  ]
})
export class CodeEditorModule { }
