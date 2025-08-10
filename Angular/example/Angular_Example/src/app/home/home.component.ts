import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route:Router){}
profilefun(name:string){
    this.route.navigate(['/profile'],{queryParams:{uname:name}})
}
}
