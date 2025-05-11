import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel-produtos',
  imports: [],
  templateUrl: './carrousel-produtos.component.html',
  styleUrl: './carrousel-produtos.component.scss'
})
export class CarrouselProdutosComponent {
  
  currentIndex = 0;
  cardWidth = 250 + 24; // Largura do card (250px) + gap (24px)
  totalCards = 4; // Número total de cards

  get transformStyle(): string {
    return `translateX(-${this.currentIndex * this.cardWidth}px)`;
  }

  scrollLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  scrollRight(): void {
    if (this.currentIndex < this.totalCards - 1) {
      this.currentIndex++;
    }
  }
}
