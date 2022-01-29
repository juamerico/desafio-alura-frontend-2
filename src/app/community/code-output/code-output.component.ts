import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-code-output',
  templateUrl: './code-output.component.html',
  styleUrls: ['./code-output.component.scss']
})
export class CodeOutputComponent {
  @Input() public body!: string
  @Input() public language!: string
  @Input() public color!: string

  constructor() { }

}
