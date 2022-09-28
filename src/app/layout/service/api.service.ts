import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mapTo, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * post method
   */
  Post(url: string, body: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}/${url}`, body).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: any) => {
        return err;
      })
    )
  }

  /**
   * get method
   */
  Get(url: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${url}`).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: any) => {
        return err;
      })
    )
  }

  /**
   * put method
   */
  Put(url: string, body: string): Observable<any> {
    return this.http.put(`${environment.baseUrl}/${url}`, body).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: any) => {
        return err;
      })
    )
  }

  /**
   * delete method
   */
  Delete(url: string): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/${url}`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: any) => {
        return error;
      })
    )
  }
}
