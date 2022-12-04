import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataServicesService {

  constructor(private httpClient : HttpClient) { 

  }

  signUpData(data : any) : Observable<any>{
   return this.httpClient.post<any>("http://localhost:3000/signup",data)
  }

  login():Observable<any>{
   return this.httpClient.get<any>("http://localhost:3000/signup")
  }

  users(){
    return[{name:'User1',age :'28',email:'user1@gmail.com'},
    {name:'User2',age :'24',email:'user2@gmail.com'},
    {name:'User3',age :'57',email:'user3@gmail.com'},
    {name:'User4',age :'98',email:'user4@gmail.com'},
    {name:'User5',age :'32',email:'user5@gmail.com'}]
  }
}
