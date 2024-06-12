import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export default [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./home/home.component'),
                title: 'Home',
            },
            {
                path: 'not-found',
                loadComponent: () => import('./not-found/not-found.component'),
                title: 'Not Found 404',
            },
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: '**', redirectTo: 'not-found' },
        ]
    },
] as Routes;