import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, TemplateVariableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // arr=["Paresh","Mahesh","Ganesh","naresh"]
  arr=[""]
  student=[
    {name:'Anil',age:'21',email:'anil78@gmail.com'},
    {name:'Mayank',age:'25',email:'Mayank@gmail.com'},
    {name:'Mohan',age:'28',email:'mohan78@gmail.com'},
    {name:'Vaidha',age:'30',email:'vaidha78@gmail.com'},
  ]
  title = 'example';
  display = '';
  na = '';
   
 

    x= 20;
  event(e: MouseEvent) {
    console.log("click!", e.type)
    console.log(e.target)
    console.log((e.target as Element).className)
    console.log((e.target as HTMLButtonElement).name);
  }

  another(e: Event) {
    this.na = (e.target as HTMLInputElement).value;
  }

  showname() {
    this.display = this.na;
  }

  setname() {
    this.na = "Paresh";
  }

  displayname: boolean = true;
  toggle() {
    this.displayname = !this.displayname;
  }

  toglediv2 = true;
  newtogle() {
    this.toglediv2 = !this.toglediv2;
  }

  color1 = 1;
  chnagecl(val: number) {
    if (val >= 1 && val <= 4) {
      this.color1 = val;
    } else {
      this.color1 = 5;
    }
  }

  // ✅ FIXED: Now this updates the color based on typed value
  colorchange(e: Event) {
    const numberval = parseInt((e.target as HTMLInputElement).value);
    this.chnagecl(numberval);
  }
 
  cs="yellow"
  swchange(val:string){
    this.cs=val;
  }
  newcolor(e: Event){
       this.cs=(e.target as HTMLInputElement).value;
    }
     username:string="";
    getname(strname:string){
      console.log(strname);
     this.username=strname;
    }
   displayhead=false;
    constructor(){
      effect(()=>{
        console.log(this.count());
        console.log(this.g());
        if(this.oa()==2)
        {
           this.displayhead=true;
          setInterval(()=>{
         this.displayhead=false;
          },2000)
      
        }
        else{
      this.displayhead=false;
        }
      })
    }
     count: WritableSignal <number | string > = signal<number | string >(10);
  updatename(){
      this.count.set("Hello");
        
    }
 g=signal(10);
   
//  computed signals
  ox=signal(10);
  oy=signal(20);
  oz=computed(()=>this.ox()+this.oy());
  chnage(){
    console.log(this.oz())
    this.ox.set(100);
  }
  oa=signal(1);
  


}


 