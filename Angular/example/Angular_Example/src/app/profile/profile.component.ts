import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  //first
  //     username:String|null="";
  // constructor(private route:ActivatedRoute){}

  //   ngOnInit(){
  //     this.username=this.route.snapshot.paramMap.get('name')
  //   }
  

  //second
  //     username:String|null="";
  // constructor(private route:ActivatedRoute){}

  //   ngOnInit(){
  //    this.route.queryParams.subscribe(params=>{this.username=params['uname']})
  //   }

// third
username:String|null="";
  constructor(private route:ActivatedRoute){}
    ngOnInit()
{
   this.route.data.subscribe(data=>{
    this.username=data['name']
  })
}  
}



