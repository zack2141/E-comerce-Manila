import { Routes } from '@angular/router';
import { ProdctosComponent } from './prodctos/prodctos.component';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
    {path:'productos', component:ProdctosComponent},
    {path:'carrito', component:CarritoComponent}
];

export class AppRoutingModule{}