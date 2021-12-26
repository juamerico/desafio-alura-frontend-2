import { Component, OnInit, Output } from '@angular/core';
import { Code } from 'src/app/models/code';

@Component({
  selector: 'app-code-output',
  templateUrl: './code-output.component.html',
  styleUrls: ['./code-output.component.scss']
})
export class CodeOutputComponent implements OnInit {
  public codeOutput = "Teste!"

  constructor() { }

  ngOnInit(): void {
  }

}
