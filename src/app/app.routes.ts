import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {ServicesComponentComponent} from './services-component/services-component.component';
import {AboutUsComponentComponent} from './about-us-component/about-us-component.component';

export const router:Routes =
[
        { path: '',redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponentComponent },
        { path: 'services', component: ServicesComponentComponent },
        { path: 'about', component: AboutUsComponentComponent }
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);