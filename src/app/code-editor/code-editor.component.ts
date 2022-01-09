import { HighlightJsService } from './../services/highlight-js.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent {

  public color: string = "#6BD1FF"

  constructor(private hljs: HighlightJsService, private formBuilder: FormBuilder) { }

  public highlight(event: Event): void {
    event.preventDefault()
    this.hljs.highlighText()
  }

  public changeColor(event: Event): void {
    this.color = (<HTMLInputElement>event.target).value
  }
}
