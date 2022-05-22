import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
    { 
        path: 'home', 
        component: PagesComponent,
        children: [
            { path: '', component: HomeComponent},
            { path: 'user', component: UserDetailComponent},
            { path: '**', component: ErrorComponent },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


