import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  pureRequestUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<any> {
    return this.http.get(this.pureRequestUrl);
  }

  getSinglePerson(id: number): Observable<any> {
    return this.http.get(this.pureRequestUrl + id);
  }

  search(query: string): Observable<any> {
    return this.http.get(this.pureRequestUrl + '?search=' + query);
  }

}
