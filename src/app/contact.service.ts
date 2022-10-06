import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiURL = "http://127.0.0.1:8000/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.apiURL + 'contact-list')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  create(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.apiURL + 'contact', JSON.stringify(contact), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  delete(id: number) {
    return this.httpClient.delete<Contact>(this.apiURL + 'contact-list/' + id, this.httpOptions)
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
