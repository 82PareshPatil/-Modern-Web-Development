import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,TemplateVariableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example';
  display=''
  na=''
  event(e:MouseEvent){
    console.log("click!",e.type)
    console.log(e.target)
    console.log((e.target as Element).className)
    console.log((e.target as HTMLButtonElement).name);
  }
  inputevent(e:any){
    this.na=(e.target as HTMLInputElement).value;
 
  }
  showname(){
     this.display=this.na;
  }
  setname(){
    this.na="Paresh"
  }  
}
