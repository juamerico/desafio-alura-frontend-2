import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { first, map, Observable, switchMap } from 'rxjs';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getFullName(userName: string): Observable<any> {
    return this.httpClient.get<User>(`https://api.github.com/users/${userName}`)
  }
}
