import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  constructor(private api:ApiService, private route:Router){}
  name = ""
  address = ""
  email = ""
  phone = ""
  username = ""
  password = ""

  readValues = () => {
    let data = {
      "name": this.name,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password
    }
    this.api.userReg(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          console.log(response)
          alert("User Registration Successfull")
          this.route.navigate(["/userLogin"])
        }else{
          alert("User Registration Failed")
        }
      }
    )
  }
}