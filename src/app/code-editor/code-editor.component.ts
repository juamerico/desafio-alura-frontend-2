import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HighlightJsService } from './../services/highlight-js.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit {
  public color: string = "#6bd1ff"
  @ViewChild("colorInput") colorInput!: ElementRef
  @ViewChild("code") code!: ElementRef
  @ViewChild("language") language!: ElementRef

  constructor(private hljs: HighlightJsService) {
  }

  ngAfterViewInit(): void {
    this.colorInput.nativeElement.value = this.color
  }

  public highlight(event: Event, language: string): void {
    event.preventDefault()
    const code = this.code.nativeElement.textContent
    this.hljs.highlighText()
  }

  public onFormSubmit(form: NgForm) {
    console.log("FORM: ", form)
    console.log("FORM.VALUE: ", form.value)
  }

  public changeColor(colorInput: HTMLInputElement): void {
    this.color = colorInput.value
    console.log(colorInput.value)
  }
}
