import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './types';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
      private http: HttpClient,
  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`/api/users/12345/listings`);
  }

  createNewListing(name, price, description): Observable<Listing> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Listing>('/api/listings', {
        name, price, description,
    }, {
        headers,
    });
  }
}
