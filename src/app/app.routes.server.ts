import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'realisation/:id',
    renderMode: RenderMode.Server
  },

  {
    path: 'prestation-detail/:id',
    renderMode: RenderMode.Server
  },
  
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
