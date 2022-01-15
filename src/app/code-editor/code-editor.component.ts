import { HighlightJsService } from './../services/highlight-js.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  public color: string = "#6BD1FF"

  constructor(private hljs: HighlightJsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.body.nativeElement.focus()
  }

  public highlight(event: Event): void {
    event.preventDefault()
    this.hljs.highlighText()
  }

  public changeColor(event: Event): void {
    this.color = (<HTMLInputElement>event.target).value
  }
}
