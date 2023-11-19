import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cd-custom',
    loadChildren: () => import('cd-custom/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cd-signals',
    loadChildren: () => import('cd-signals/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cd-onpush',
    loadChildren: () => import('cd-onpush/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cd-default',
    loadChildren: () => import('cd-default/Routes').then((m) => m.remoteRoutes),
  },
];
