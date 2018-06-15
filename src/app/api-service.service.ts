import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(private http: HttpClient) { }

  getUser(login:string): Observable<User> {
    return <Observable<User>>this.http.get(`https://api.github.com/users/${login}?access_token=e54235c9cf8b777c449fdee0fd5b146ad019e258`);
  }
}