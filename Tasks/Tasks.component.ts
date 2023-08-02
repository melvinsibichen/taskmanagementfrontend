import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-Tasks',
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css']
})
export class TasksComponent {
  constructor(private api:ApiService){
    api.getAllTasks().subscribe(
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