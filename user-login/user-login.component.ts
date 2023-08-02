import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api:ApiService,private route:Router){}
  username=""
  password=""
  
  readValues = ()=>{
    let data:any = {
      "username":this.username,
      "password":this.password
    }
    this.api.userLogin(data).subscribe(
      (response:any) =>{
        if(response.status == "success"){
          localStorage.setItem("userInfo",response.userId)
          this.route.navigate(["/viewUserTasks"])
        }else{
          alert("Invalid Credentials")
        }
      }
    )
  }

}
