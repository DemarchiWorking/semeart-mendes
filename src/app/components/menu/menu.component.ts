import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  screenWidth: number = 1024;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  isTabletOrMobile(): boolean {
    return this.screenWidth < 768;
  }
}
