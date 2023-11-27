import { Routes } from '@angular/router';


//FORMULARIOS
import { TipoOrdenCompraComponent } from './Formularios/Compras/tipo-orden-compra/tipo-orden-compra.component';
import { CapturaOrdenCompraComponent } from './Formularios/Compras/captura-orden-compra/captura-orden-compra.component';
import { AgregarCompraComponent } from './Formularios/Compras/agregar-compra/agregar-compra.component';

export const routes: Routes = [
  {
    path: 'compras/tipo-orden-compra',
    component: TipoOrdenCompraComponent
  },
  {
    path: 'compras/captura-orden-compra',
    component: CapturaOrdenCompraComponent
  },
  {
    path: 'compras/agregar-compra',
    component: AgregarCompraComponent
  }
];
