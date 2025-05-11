import { CommonModule, NgIf  } from '@angular/common';
//NgOptimizedImage, NgOptimizedImage
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavRedeSocialComponent } from "./components/nav-rede-social/nav-rede-social.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { MenuComponent } from "./components/menu/menu.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CarouselComponent, NgIf, NavRedeSocialComponent, BreadcrumbComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {





  title = 'yt-comparator';
  categories = [
    { id: 1, name: 'Categoria 1', subcategories: ['Subcategoria 1.1', 'Subcategoria 1.2', 'Subcategoria 1.3'] },
    { id: 2, name: 'Categoria 2', subcategories: ['Subcategoria 2.1', 'Subcategoria 2.2', 'Subcategoria 2.3'] },
    { id: 3, name: 'Categoria 3', subcategories: ['Subcategoria 3.1', 'Subcategoria 3.2', 'Subcategoria 3.3'] },
    { id: 4, name: 'Categoria 4', subcategories: ['Subcategoria 4.1', 'Subcategoria 4.2', 'Subcategoria 4.3'] },
    { id: 5, name: 'Categoria 5', subcategories: ['Subcategoria 5.1', 'Subcategoria 5.2', 'Subcategoria 5.3'] },
  ];

  currentIndex = 0;
  startX = 0;
  endX = 0;

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.endX = event.touches[0].clientX;
  }




  activeMenu: string | null = null;
  isMobileMenuOpen = false;
  activeMobileCategory: string | null = null;

  openMenu(category: string) {
    this.activeMenu = category;
  }

  closeMenu() {
    this.activeMenu = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeMobileCategory = null;
    }
  }
  trackByFn(index: number, item: any): number {
    return item.id; // Agora cada item tem um ID único
  }
  
  
  toggleMobileCategory(category: string) {
    this.activeMobileCategory =
      this.activeMobileCategory === category ? null : category;
  }

  isMenuOpen = false;
 // activeMenu: string | null = null;

  toggleMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
  

  
}


