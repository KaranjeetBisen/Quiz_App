import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { catchError, Observable, throwError } from 'rxjs';
import { QuestionWrapper } from '../../models/questionWrapper';
import { Responsee } from '../../models/response';


const url = ["http://localhost:8080/quiz/"];
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }

  getAllQuiz(): Observable<Quiz[]>{
      return this.http.get<Quiz[]>(url+"all").pipe(
        catchError(this.handleError));
    }

  postQuiz(category: string, numQ: number, title: string): Observable<any> {
      const params = new HttpParams()
        .set('category', category)
        .set('numQ', numQ.toString())
        .set('title', title);
      return this.http.post(url+"create", null, { params, responseType:'text' });
    }


  // Get quiz questions by ID
  getQuizQuestions(id: number): Observable<QuestionWrapper[]> {
    return this.http.get<QuestionWrapper[]>(url+`get/${id}`);
  }

  submitQuiz(id: number, responses: Responsee[]): Observable<any>{
    return this.http.post(url+`submit/${id}`, responses,{responseType:'text'});
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
