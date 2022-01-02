import { HighlightJsService } from './../services/highlight-js.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  public codeInput = "function teste() {return 'hello world';}"

  constructor(private hljs: HighlightJsService) { }

  ngOnInit(): void {
  }

  highlight() {
    this.hljs.highlighText()
  }

}
