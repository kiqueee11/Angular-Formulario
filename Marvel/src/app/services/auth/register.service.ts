import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url: string = 'http://localhost:8080/api/users';

  constructor(
    private http: HttpClient,
  ) { }

  check(): Observable<any> {

    return this.http.get(`${this.url}/status`)

  }

}
