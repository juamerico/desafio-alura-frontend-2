import { HighlightJsService } from './../services/highlight-js.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  public code = `.body {
    color: red;
  }`

  constructor(private hljs: HighlightJsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  highlight(event: Event) {
    event.preventDefault()
    this.hljs.highlighText()
  }

}
