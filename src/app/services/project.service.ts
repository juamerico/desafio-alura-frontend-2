import { Injectable } from '@angular/core';

import { Code } from 'src/app/models/code';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

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

  public fromLocalStorage() {
    const projects = []

    if (localStorage.length > 0) {
      for (let i = 1; i <= localStorage.length; i++) {
        const item = JSON.parse(localStorage.getItem(<string><unknown>i) || "{}")
        projects.push(item)
      }
    }

    return projects
  }

  private toLocalStorage(project: any): void {
    localStorage.setItem(project["id"], JSON.stringify(project))
  }

  private generateId(): number {
    return localStorage.length + 1
  }
}
