import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Settings } from './pages/settings/settings';
import { AdminPage } from './pages/admin-page/admin-page';
import { Cart } from './pages/cart/cart';
import { Favorites } from './pages/favorites/favorites';
import { ProductList } from './pages/product-list/product-list';
import { Register } from './pages/register/register';
import { ProductCrud } from './pages/product-crud/product-crud';

export const routes: Routes = [
    {path: "", component:Home},
    {path: "home", component:Home},
    {path: "login", component:Login},
    {path: "register", component:Register},
    {path: "settings", component:Settings},
    {path: "admin-page", component:AdminPage},
    {path: "cart", component:Cart},
    {path: "favorites", component:Favorites},
    {path: "product-list", component:ProductList},
    {path: "product-crud", component:ProductCrud}
];
