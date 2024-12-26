import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const url = ["http://localhost:8080/question/"];
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  getAllCustomer(): Observable<any>{
    return this.http.get(url+"allQuestions");
  }

  postCustomer(question:any): Observable<any>{
    return this.http.post(url+"add", question );
  }

  deleteCustomer(id:number): Observable<any>{
    return this.http.delete(url+"del/"+id);
  }

  getCustomerById(id: number): Observable<any>{
    return this.http.get(url+"getById/"+id);
  }

  updateCustomer(id : number, question : any): Observable<any>{
    return this.http.put(url+"upd/"+id, question);
  }
}
