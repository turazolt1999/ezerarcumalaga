import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { GuestGuard } from './guest.guard';
import { HomeComponent } from './home/home.component';
import { VideouploadComponent } from './videoupload/videoupload.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'video_upload', component: VideouploadComponent, canActivate: [AuthGuard] },
];
