import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);
  public breadcrumbs$ = this.breadcrumbs.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: Breadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      this.breadcrumbs.next(breadcrumbs);
    });
  }

  private addBreadcrumb(route: any, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data['breadcrumb']) {
      const routeUrl = parentUrl.concat(route.routeConfig.path.split('/'));
      const breadcrumbLabel = route.routeConfig.data['breadcrumb'];
      breadcrumbs.push({ label: breadcrumbLabel, url: '/' + routeUrl.join('/') });
    }

    if (route.firstChild) {
      this.addBreadcrumb(route.firstChild, parentUrl.concat(route.routeConfig ? route.routeConfig.path.split('/') : []), breadcrumbs);
    }
  }
}
