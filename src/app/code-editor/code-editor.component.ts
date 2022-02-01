import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Code } from '../models/code';
import { ProjectService } from './../services/project.service';
import { HighlightJsService } from './../services/highlight-js.service';


@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit {
  @ViewChild("colorInput") colorInput!: ElementRef
  @ViewChild("body") body!: ElementRef
  @ViewChild("language") language!: ElementRef

  public code!: Code

  public color: string = "#6bd1ff"

  constructor(
    private hljs: HighlightJsService,
    private project: ProjectService
  ) {
  }

  ngAfterViewInit(): void {
    this.colorInput.nativeElement.value = this.color
  }

  public highlight(event: Event): void {
    event.preventDefault()
    this.hljs.highlighText()
  }

  public saveProject(form: NgForm): void {
    const body = this.body.nativeElement.textContent

    this.code = {
      title: form.value["title"],
      description: form.value["description"],
      body: body,
      language: form.value["language"],
      color: form.value["color"]
    }

    this.project.generateProject(this.code)
  }

  public changeColor(colorInput: HTMLInputElement): void {
    this.color = colorInput.value
    console.log(colorInput.value)
  }
}
