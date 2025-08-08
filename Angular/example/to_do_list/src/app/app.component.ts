import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
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
}
