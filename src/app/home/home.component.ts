import { CarrouselProdutosComponent } from './../components/carrousel-produtos/carrousel-produtos.component';
import {  NgFor } from '@angular/common';import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-home',
  imports: [BreadcrumbComponent, CarrouselProdutosComponent],// NgFor,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = [
    {
      iconLeft: 'fas fa-gift',
      title: 'Os melhores produtos',
      description: 'Diversas opções para você',
      iconRight: 'fas fa-heart'
    },
    {
      iconLeft: 'fas fa-credit-card',
      title: 'Parcele em até 12x',
      description: 'Nos cartões de crédito',
      iconRight: 'fas fa-check-circle'
    },
    {
      iconLeft: 'fas fa-truck',
      title: 'Entrega rápida',
      description: 'Receba em sua casa',
      iconRight: 'fas fa-box-open'
    },
    {
      iconLeft: 'fas fa-shield-alt',
      title: 'Segurança garantida',
      description: 'Proteção para você',
      iconRight: 'fas fa-check-circle'
    }
  ];

}
