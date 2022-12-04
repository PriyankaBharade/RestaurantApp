import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private httpClient : HttpClient) { }

  //Create Restaurant Using Post
  postRestaurant(data:any){
    return this.httpClient.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res
    }))
  }

  // //Get Restaurant Using Get Method
  // getRestaurant(data:any,id:number){
  //   return this.httpClient.get<any>("http://localhost:3000/posts"+id,data).pipe(map((res:any)=>{
  //        return res
  //   }))
  // }

   //Get Restaurant Using Get Method
   getRestaurant(){
    return this.httpClient.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
         return res
    }))
  }
  //Delete Restaurant Using Get Method
  deleteRestaurant(id:number){
    console.log("Delete User id" ,id)
    return this.httpClient.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
         return res
    }))
  }
   //Put Restaurant Using Get Method
   putRestaurant(data:any,id:number){
    return this.httpClient.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
         return res
    }))
  }
}
