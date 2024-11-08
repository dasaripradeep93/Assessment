import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'https://localhost:7248/api/Person'; 
  http = inject(HttpClient)

  constructor() { }

  public savePerson(Person: any): Observable<any> {
    var test = this.http.post(this.apiUrl, Person);
    return test;
  }
}