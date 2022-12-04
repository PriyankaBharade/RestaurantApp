import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataServicesService } from 'src/app/services/userdata-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
     private router:Router,
     private userDataService:UserdataServicesService){
  }

  login(item:any){
    this.userDataService.login().subscribe(res=>{
       const user = res.find((a:any)=>{
         return a.email === item.value.email
         && a.password === item.value.password
       })
       if(user){
         alert("Login Successfully");
        // this.item.reset()
         this.router.navigate(['/dahboard'])
       }else {
         alert("Please Enter valid Username and password");
       }
     })
   }
}
