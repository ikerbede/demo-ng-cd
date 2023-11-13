import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cd-signals',
    loadChildren: () => import('cd-signals/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cd-onpush',
    loadChildren: () => import('cd-onpush/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cd-async',
    loadChildren: () => import('cd-async/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cd-default',
    loadChildren: () => import('cd-default/Routes').then((m) => m.remoteRoutes),
  },
];
