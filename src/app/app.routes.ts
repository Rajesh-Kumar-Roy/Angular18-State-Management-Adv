import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'products',
        pathMatch: 'full'
        
    },
    {
        path:'counter',
        loadComponent: () => import('./components/counter/counter.component').then(a=>a.CounterComponent)
    },
    {
        path:'products',
        loadComponent: () => import('./components/products/products.component').then(a=>a.ProductsComponent)
    },
    {
        path:'cart',
        loadComponent: () => import('./components/cart/cart.component').then(a=>a.CartComponent)
    }
];
