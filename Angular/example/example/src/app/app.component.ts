import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example';
  event(e:MouseEvent){
    console.log("click!",e.type)
    console.log(e.target)
    console.log((e.target as Element).className)
    console.log((e.target as HTMLButtonElement).name);
  }
  inputevent(e:any){
    console.log((e.target as HTMLInputElement).value)
  }
}
