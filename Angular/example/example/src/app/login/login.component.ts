import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name="";
  dis="";
  val(e:any){
     this.name=(e.target as HTMLInputElement).value;
  }
  showname(){
    this.dis=this.name;
  }
  sename(){
    this.name="Hello"
  }
}
