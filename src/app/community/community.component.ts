import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  public title = "Título do projeto"
  public description = "Descrição do projeto"
  public likes = 0
  public comments = 0

  constructor() { }

  ngOnInit(): void {
  }

}
