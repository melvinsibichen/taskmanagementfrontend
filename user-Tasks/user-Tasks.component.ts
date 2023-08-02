import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-Tasks',
  templateUrl: './user-Tasks.component.html',
  styleUrls: ['./user-Tasks.component.css']
})
export class UserTasksComponent {
  constructor(private api:ApiService){
    api.getUserTasks({"id":localStorage.getItem("userInfo")}).subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.Tasks = response
      }
    )
  }
  Tasks:any = []
  loading:boolean = true
}
