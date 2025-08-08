import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.css'
})
export class TemplateVariableComponent {
    email = ""
    setname=""
    getname(val:string){
      this.email=val;
    }
    
    
}
