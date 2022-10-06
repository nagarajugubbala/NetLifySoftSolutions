import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiURL = "http://127.0.0.1:8000/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.apiURL+ 'courses')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.apiURL + 'course', JSON.stringify(course), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<Course> {
    return this.httpClient.get<Course>(this.apiURL + 'course/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, course: Course): Observable<Course> {
    return this.httpClient.put<Course>(this.apiURL + 'course/' + id, JSON.stringify(course), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete<Course>(this.apiURL + 'course/' + id, this.httpOptions)
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
