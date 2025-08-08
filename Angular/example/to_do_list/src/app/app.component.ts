import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to_do_list';
  task = ""
  todo:{id:number,task:string}[]=[]
  addtask(){
     this.todo.push({id:this.todo.length+1,task:this.task})
     this.task="";
  }
  delet(tl:number){
    this.todo=this.todo.filter((item)=>item.id!=tl)
  }

  //dynamic style
bgcolor="black"
cgbg() {
  this.bgcolor = this.bgcolor === "black" ? "white" : "black";
}
 // component directive
show=true




}
