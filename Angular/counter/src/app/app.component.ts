import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter';
  count=0;
 
  countfun(val:string){
         if(val=="minus"){
             if(this.count<1){
              this.count=0;
             }
             else{
              this.count=this.count-1;
             }
         }
         else if(val=="plus"){
          this.count=this.count+1;
         }
         else{
          this.count=0;
         }
  }
}
