import { Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { RestaurantModel } from '../model/restaurant.model';
@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent {
  formValue! : FormGroup
  constructor(private formBuilder:FormBuilder, private api : ApiServicesService){}
  restaurantModelObj : RestaurantModel = new RestaurantModel
  allRestaurantData : any
  showAdd!:boolean
  showbtn!:boolean
  ngOnInit () : void {
    this.formValue = this.formBuilder.group({
     name:[''],
     email:[''],
     mobile:[''],
     address:[''],
     service:['']
    })
    this.getAllData()
  }
 
  clickAddRestro(){
   this.formValue.reset();
   this.showAdd = true
   this.showbtn = false
  }
 
  addResto(){
   this.restaurantModelObj.name = this.formValue.value.name
   this.restaurantModelObj.email = this.formValue.value.email
   this.restaurantModelObj.mobile = this.formValue.value.mobile
   this.restaurantModelObj.address = this.formValue.value.address
   this.restaurantModelObj.service = this.formValue.value.service
 
   this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
     console.log(res)
     alert("Restaurant Records Added Successfully")
     this.formValue.reset()
     this.getAllData()
   },
   err=>{
     alert("Something went wrong")
   }
   )
  }
 
  getAllData(){
   this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData = res
   })
  }
 
  deleteResto(data:any){
   this.api.deleteRestaurant(data.id).subscribe(res=>{
    alert("Restaurant Record Delete")
    this.getAllData()
   })
  }
 
  onEdit(data:any){
   this.showAdd = false
   this.showbtn = true
   this.restaurantModelObj.id = data.id
   this.formValue.controls['name'].setValue(data.name)
   this.formValue.controls['email'].setValue(data.email)
   this.formValue.controls['mobile'].setValue(data.mobile)
   this.formValue.controls['address'].setValue(data.address)
   this.formValue.controls['service'].setValue(data.service)
  }
 
  updateResto(){
   this.restaurantModelObj.name = this.formValue.value.name
   this.restaurantModelObj.email = this.formValue.value.email
   this.restaurantModelObj.mobile = this.formValue.value.mobile
   this.restaurantModelObj.address = this.formValue.value.address
   this.restaurantModelObj.service = this.formValue.value.service
   this.api.putRestaurant(this.restaurantModelObj,this.restaurantModelObj.id).subscribe(res=>{
     alert("Restaurant Record Update")
     this.getAllData()
    })
  }
}
