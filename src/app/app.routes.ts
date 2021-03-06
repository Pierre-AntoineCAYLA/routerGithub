import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PATH_HOME, PATH_DETAIL} from './constantes';
import { DetailComponent } from './detail/detail.component';


export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    { path: PATH_DETAIL + "/:user", component: DetailComponent}

];