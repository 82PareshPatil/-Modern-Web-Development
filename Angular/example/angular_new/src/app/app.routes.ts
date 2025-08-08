import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"logout",component:LogoutComponent},
    {path:"About",component:AboutComponent}
];
