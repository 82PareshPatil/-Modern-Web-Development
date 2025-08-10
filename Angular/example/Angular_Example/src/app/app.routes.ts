import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

import { HomeComponent } from './home/home.component';
import { InstagramComponent } from './instagram/instagram.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"logout",component:LogoutComponent},
    {path:"About",component:AboutComponent},
    {path:"profile",component:ProfileComponent,data:{name:'Paresh g Patil'}},
    {path:"",component:HomeComponent},
    {path:"instagram",component:InstagramComponent},
    {path:"user/:id/:name/:add",component:UserComponent},
    {path:"**",component:NotpagefoundComponent}
];
