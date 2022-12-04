import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataServicesService } from 'src/app/services/userdata-services.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm! : FormGroup
  constructor(private formBuilder:FormBuilder,
      private router:Router,
      private userDataService:UserdataServicesService){}
  
  ngOnInit():void{
   this.signUpForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required,Validators.email],
    mobile:['',Validators.required,Validators.minLength(10)],
    password:['',Validators.required,Validators.minLength(10)]
   })
  }

  signUp() {
    this.userDataService.signUpData(this.signUpForm.value).subscribe(res=>{
      alert("Registration Sucessfull")
      this.signUpForm.reset()
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong")
    })
  }

  get name(){
    return this.signUpForm.get('name')
  }

  get email(){
    return this.signUpForm.get('email')
  }

  get mobile(){
    return this.signUpForm.get('mobile')
  }

  get password(){
    return this.signUpForm.get('password')
  }
}
