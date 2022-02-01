import { Component, OnInit } from '@angular/core';

import { HighlightJsService } from './../services/highlight-js.service';
import { ProjectService } from './../services/project.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  public likes = 0
  public comments = 0

  public projects!: any[]

  constructor(private project: ProjectService, private hljs: HighlightJsService) { }

  ngOnInit() {
    this.projects = this.project.fromLocalStorage()
    this.hljs.highlighText()
  }
}
