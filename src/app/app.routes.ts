import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HomeScreenComponent } from '../home-screen/home-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';

//to add routing
export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: HomeComponent },
    { path: 'home', component: HomeScreenComponent, children: [
        { path: '', redirectTo: 'dash', pathMatch: 'full' },
        { path: 'dash', component: DashboardComponent },
        { path: 'books', component: BooksComponent },
      ]
    }]
