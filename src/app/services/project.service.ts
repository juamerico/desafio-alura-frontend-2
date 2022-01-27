import { Injectable } from '@angular/core';

import { Code } from 'src/app/models/code';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private toLocalStorage(project: any): void {
    localStorage.setItem(project["id"], JSON.stringify(project))
  }

  private generateId(): number {
    return localStorage.length + 1
  }

  public generateProject(code: Code): void {
    const project = {
      id: this.generateId(),
      title: code.title,
      description: code.description,
      body: code.body,
      language: code.language,
      color: code.color
    }

    console.log("PROJECT: ", project)

    this.toLocalStorage(project)
  }
}
