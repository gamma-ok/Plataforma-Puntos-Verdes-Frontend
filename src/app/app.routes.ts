import { Routes } from '@angular/router';
import { Inicio } from './public/pages/inicio/inicio';
import { Servicios } from './public/pages/servicios/servicios';
import { Usuarios } from './public/pages/usuarios/usuarios';
import { Estadisticas } from './public/pages/estadisticas/estadisticas';
import { Recompensas } from './public/pages/recompensas/recompensas';
import { Signup } from './public/pages/signup/signup';
import { Login } from './public/pages/login/login';

import { PublicLayout } from './public/layout/public-layout/public-layout';

import { AdminLayout } from './dashboard/admin/layout/admin-layout/admin-layout';
import { AdminInicio } from './dashboard/admin/pages/admin-inicio/admin-inicio';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Inicio },
      { path: 'servicios', component: Servicios },
      { path: 'usuarios', component: Usuarios },
      { path: 'estadisticas', component: Estadisticas },
      { path: 'recompensas', component: Recompensas },
      { path: 'signup', component: Signup },
      { path: 'login', component: Login },
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'admin-inicio', component: AdminInicio,
        data: { title: 'Dashboard Admin | Puntos Verdes' }
      },
    ]
  }


];
