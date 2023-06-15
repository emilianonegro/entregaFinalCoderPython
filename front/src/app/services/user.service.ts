import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:8000/api/users/';

  constructor(private http: HttpClient) { }

  addUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.url, user);
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.url);
  }

  getUser(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.url}${id}`);
  }

  updateUser(id: number, user: UserInterface): Observable<UserInterface> {
    return this.http.put<UserInterface>(`${this.url}${id}/`, user);
  }

  deleteUser(id: number): Observable<UserInterface> {
    return this.http.delete<UserInterface>(`${this.url}${id}/`);
  }

}
