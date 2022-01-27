import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators'
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))), catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    //in a real world app, we may send the server to some logging infrastructure 
    //instead of just logging it to the console

    let errorMessage = '' ;
    if(error.error instanceof ErrorEvent){
      // a client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error.message}`
    } else {
      //the back return unsuccessful response code. 
      
    }
  }
}
