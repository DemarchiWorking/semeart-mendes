import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
interface Breadcrumb {
    label: string;
    url: string;
  }
  
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterModule] 
})
export class BreadcrumbComponent {
 
    breadcrumbs: Breadcrumb[] = [];
  
    constructor(private router: Router, private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.route.root);
      });
    }
  
    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
      const children = route.children;
      if (children.length === 0) {
        return breadcrumbs;
      }
  
      for (const child of children) {
        const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
        if (routeURL !== '') {
          url += `/${routeURL}`;
        }
        breadcrumbs.push({
          label: child.snapshot.data['breadcrumb'] || 'Página',
          url,
        });
  
        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
      return breadcrumbs;
    }
}
