import { Injectable } from '@angular/core';
import hljs from "highlight.js";

@Injectable({
  providedIn: 'root'
})
export class HighlightJsService {

  constructor() { }

  public highlighText(): void {
    hljs.highlightAll()
  }
}
