import { Routes } from '@angular/router';
import { comparerResolver } from './resolvers/comparer/comparer.resolver';
import { ComparerComponent } from './components/comparer/comparer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, // Define a rota base sem redirecionamento
        data: { breadcrumb: 'Home' }
    },
    {
        path: 'comparer',
        children: [
            {
                path: '',
                component: ComparerComponent,
                data: { breadcrumb: 't1' }
            },
            {
                path: ':channelA/:channelB',
                resolve: { data: comparerResolver },
                component: ComparerComponent,
                data: { breadcrumb: 't2' }
            }
        ]
    },
    {
        path: 'comparer',
        children: [
            {
                path: '',
                component: ComparerComponent,
                data: { breadcrumb: 't3' }
            },
            {
                path: ':channelA/:channelB',
                resolve: { data: comparerResolver },
                component: ComparerComponent,        
                data: { breadcrumb: 't4' }
            }
        ]
    }
];
