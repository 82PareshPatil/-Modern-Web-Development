import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"logout",component:LogoutComponent},
    {path:"About",component:AboutComponent},
    {path:"profile",component:ProfileComponent,data:{name:'Paresh g Patil'}},
    {path:"",component:HomeComponent},
    {path:"**",component:NotpagefoundComponent}
];
