import { Routes, RouterModule } from '@angular/router';
import { AdhomeComponent } from '../../admin/adhome/adhome.component';
import { AdproductComponent } from '../../admin/adproduct/adproduct.component';

export const ADMINISTRATOR_ROUTES: Routes = [
    { path: 'adhome', component: AdhomeComponent },
    { path: 'products', component: AdproductComponent },
    
];