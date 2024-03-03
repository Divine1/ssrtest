import { Routes } from '@angular/router';
import { AboutComponent } from './page/about/about/about.component';

export const routes: Routes = [
    {
        path: "" , loadChildren : () => import("./page/home/home.module").then(m => m.HomeModule)
    },
    {
        path: "landing", loadChildren : () => import("./page/landing/landing.module").then(m => m.LandingModule)
    },
    {
        path: "about", component : AboutComponent
    }
];
