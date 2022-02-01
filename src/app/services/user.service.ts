import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User = {
    avatar_url: "https://placekitten.com/200/200",
    name: "Anônimo(a)",
    html_url: "#"
  }

  constructor(private httpClient: HttpClient) { }

  public getUser() {
    const githubUserName = prompt("Qual seu nome de usuário no Github?")
    //const githubUserName = this.user.name

    if (githubUserName || githubUserName!.trim()) {
      this.apiCall(githubUserName!.trim())
        .subscribe((res: User) => {
          this.user.name = res["name"]
          this.user.avatar_url = res["avatar_url"]
          this.user.html_url = res["html_url"]
        },
          (error: Error) => {
            console.log(error)
          })
    }
  }

  private apiCall(userName: string): Observable<User> {
    return this.httpClient.get<any>(`https://api.github.com/users/${userName}`)
  }
}
