import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DocsComponent } from './pages/docs/docs.component';
import { Link1Component } from './pages/link1/link1.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
  // Lazy loading route
  {
    path: '',
    loadChildren: () =>
      import('./starter-home/starter-home.module').then(
        m => m.StarterHomeModule
      ),
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'link1',
    component: Link1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
