import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Classroom } from './classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private apiURL = "http://127.0.0.1:8000/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  get(): Observable<Classroom[]> {
    return this.httpClient.get<Classroom[]>(this.apiURL+'classroom-courses')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(classroom: Classroom): Observable<Classroom> {
    return this.httpClient.post<Classroom>(this.apiURL + 'classroom-course', JSON.stringify(classroom), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<Classroom> {
    return this.httpClient.get<Classroom>(this.apiURL + 'classroom/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, classroom: Classroom): Observable<Classroom> {
    return this.httpClient.put<Classroom>(this.apiURL + 'classroom-course/' + id, JSON.stringify(classroom), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete<Classroom>(this.apiURL + 'classroom-course/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
