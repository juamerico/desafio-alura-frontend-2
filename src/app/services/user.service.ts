import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public apiCall(userName: string): Observable<User> {
    return this.httpClient.get<any>(`https://api.github.com/users/${userName}`)
  }
}
