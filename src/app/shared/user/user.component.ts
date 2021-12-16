import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userName!: string
  public avatar_url: string = "https://placekitten.com/200/200"

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //const githubUserNamer = prompt("Qual seu nome de usuário no Github?")
    const githubUserNamer = " "

    if (!githubUserNamer || !githubUserNamer.trim()) {
      this.userName = "Anônimo(a)"
    } else {
      this.userService.apiCall(githubUserNamer.trim())
        .subscribe((res: User) => {
          this.userName = res["name"]
          this.avatar_url = res["avatar_url"]
        },
          (error: Error) => {
            console.log(error)
          })
    }
  }

}
