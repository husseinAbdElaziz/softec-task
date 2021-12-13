import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IOrder, IProduct } from '../models/producs.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IOrder[]>('/assets/db.json')
      .pipe(map((order: IOrder[]) => order.map(item => item.Products).flat()));
  }

}
