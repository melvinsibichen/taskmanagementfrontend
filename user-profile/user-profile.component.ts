import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private api:ApiService){
    let data:any = {
      "id":localStorage.getItem("userInfo")
    }
    api.getUserById(data).subscribe(
      (response:any)=>{
        this.userData = response
      }
    )
  }
  userData:any = []
}