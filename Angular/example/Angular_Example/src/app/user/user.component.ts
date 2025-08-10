import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
username:String|null="";
add:string|null="";
  constructor(private route:ActivatedRoute){}
    ngOnInit()
{
   this.route.params.subscribe(params=>{
    this.username=params['name'];
    this.add=params['add']
  })
}
}
