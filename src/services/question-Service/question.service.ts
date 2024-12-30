import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Question } from '../../models/question';


const url = ["http://localhost:8080/question/"];
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  getAllCustomer(): Observable<Question[]>{
    return this.http.get<Question[]>(url+"allQuestions").pipe(
      catchError(this.handleError));
  }

  postCustomer(question:Question): Observable<Question>{
    return this.http.post<Question>(url+"add", question ).pipe(
      catchError(this.handleError));
  }

  deleteCustomer(id:number): Observable<void>{
    return this.http.delete<void>(url+"del/"+id).pipe(
      catchError(this.handleError));
  }

  getCustomerById(id: number): Observable<Question>{
    return this.http.get<Question>(url+"getById/"+id).pipe(
      catchError(this.handleError));
  }

  updateCustomer(id : number, question : Question): Observable<Question>{
    return this.http.put<Question>(url+"upd/"+id, question,).pipe(
      catchError(this.handleError));
  }


  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage); // Log the error to the console
    return throwError(() => new Error(errorMessage));
  }
}
