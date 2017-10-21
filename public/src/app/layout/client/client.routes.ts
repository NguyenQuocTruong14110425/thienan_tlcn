import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { AdproductComponent } from '../../admin/adproduct/adproduct.component';
import { Routes, RouterModule } from '@angular/router';
import { EditproductComponent } from '../../admin/adproduct/editproduct/editproduct.component';

export const CLIENT_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add', component: AdproductComponent },
    { path: 'edit-product/:id',component: EditproductComponent}
];
