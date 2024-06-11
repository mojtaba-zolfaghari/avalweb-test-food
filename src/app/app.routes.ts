import { Routes } from '@angular/router';

export default [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
        title: 'home',
    },
    {
        path: 'not-found',
        loadComponent: () => import('./not-found/not-found.component'),
        title: 'not-found',
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.component'),
        title: 'not found 404',
    }
] as Routes;
