import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosDeProvedorComponent } from '../CapturaOrdenCompra/datos-de-provedor/datos-de-provedor.component';
import { ConceptosYDetallesComponent } from '../CapturaOrdenCompra/conceptos-ydetalles/conceptos-ydetalles.component';

@Component({
  selector: 'app-captura-orden-compra',
  standalone: true,
  imports: [CommonModule, DatosDeProvedorComponent, ConceptosYDetallesComponent],
  templateUrl: './captura-orden-compra.component.html',
  styleUrl: './captura-orden-compra.component.css'
})
export class CapturaOrdenCompraComponent {

}

