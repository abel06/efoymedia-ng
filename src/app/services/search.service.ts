import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Search } from '../data/models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query:string):Observable<Search>{
    return this.http.get<Search>(environment.SERVER_URL +  'view?search=' + query)
  }
}
