import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private behaviorSubject = new BehaviorSubject(localStorage.getItem('user'));
  currentUser = this.behaviorSubject.asObservable();

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post('http://192.168.1.192:3000/api/signup', data);
  }

  login(data) {
    return this.http.post('http://192.168.1.192:3000/api/login', data);
  }

  changeUser(user: string) {
    this.behaviorSubject.next(user);
  }

}
