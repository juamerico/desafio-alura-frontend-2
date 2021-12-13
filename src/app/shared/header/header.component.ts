import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userName!: string

  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    const githubUserNamer = prompt("Qual seu nome de usuário no Github?")
    if (!githubUserNamer || !githubUserNamer.trim()) {
      this.userName = "Anônimo(a)"
    } else {
      this.userService.getFullName(githubUserNamer.trim())
        .subscribe((res: User) => this.userName = res["name"])
    }
  }

}
