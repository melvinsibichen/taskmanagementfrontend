import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-Tasks',
  templateUrl: './add-Tasks.component.html',
  styleUrls: ['./add-Tasks.component.css']
})
export class AddTasksComponent {
  Tasks=""
  constructor(private api:ApiService, private route:Router){}
  readValues = ()=>{
    let data:any = {
      "Tasks":this.Tasks,
      "userID":localStorage.getItem("userInfo")
    }
    this.api.addTasks(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Tasks Added Successfully")
          this.route.navigate(["/viewUserTasks"])
          
        }else{
          alert("Error in adding Tasks")
        }
      }
    )
  }
}