import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { CheckPasswordComponent } from './pages/check-password/check-password.component';

const routes: Routes = [
    {
        path: '',
        children:[
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'check-email',
                component: CheckEmailComponent
            },
            {
                path: 'check-password',
                component: CheckPasswordComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
];


@NgModule({
    declarations:[],
    imports: [
            RouterModule.forChild(routes)
        ],
    exports: [RouterModule]
})

export class AuthRoutingModule{

}