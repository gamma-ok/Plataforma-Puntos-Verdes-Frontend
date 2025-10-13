import { Routes } from '@angular/router';
import { Inicio } from './public/pages/inicio/inicio';
import { Servicios } from './public/pages/servicios/servicios';
import { Usuarios } from './public/pages/usuarios/usuarios';
import { Estadisticas } from './public/pages/estadisticas/estadisticas';
import { Recompensas } from './public/pages/recompensas/recompensas';
import { Contacto } from './public/pages/contacto/contacto';
import { Signup } from './public/pages/signup/signup';
import { Login } from './public/pages/login/login';

import { PublicLayout } from './public/layout/public-layout/public-layout';

import { AdminLayout } from './dashboard/admin/layout/admin-layout/admin-layout';
import { AdminInicio } from './dashboard/admin/pages/admin-inicio/admin-inicio';

import { MunicipalidadLayout } from './dashboard/municipalidad/layout/municipalidad-layout/municipalidad-layout';
import { MunicipalidadInicio } from './dashboard/municipalidad/pages/municipalidad-inicio/municipalidad-inicio';

import { RecolectorLayout } from './dashboard/recolector/layout/recolector-layout/recolector-layout';
import { RecolectorInicio } from './dashboard/recolector/pages/recolector-inicio/recolector-inicio';

import { CiudadanoLayout } from './dashboard/ciudadano/layout/ciudadano-layout/ciudadano-layout';
import { CiudadanoInicio } from './dashboard/ciudadano/pages/ciudadano-inicio/ciudadano-inicio';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Inicio,
        data: { title: 'Inicio | Puntos Verdes' } },
      { path: 'servicios', component: Servicios,
        data: { title: 'Servicios | Puntos Verdes' } },
      { path: 'usuarios', component: Usuarios,
        data: { title: 'Usuarios | Puntos Verdes' } },
      { path: 'estadisticas', component: Estadisticas,
        data: { title: 'Estadísticas | Puntos Verdes' } },
      { path: 'recompensas', component: Recompensas,
        data: { title: 'Recompensas | Puntos Verdes' } },
      { path: 'contacto', component: Contacto,
        data: { title: 'Contacto | Puntos Verdes' } },
      { path: 'signup', component: Signup,
        data: { title: 'Registrarse | Puntos Verdes' } },
      { path: 'login', component: Login,
        data: { title: 'Iniciar sesión | Puntos Verdes' } },
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'admin-inicio', component: AdminInicio,
        data: { title: 'Inicio | Dashboard Admin | Puntos Verdes' }
      },
    ]
  },
  {
    path: 'municipalidad',
    component: MunicipalidadLayout,
    children: [
      {
        path: 'municipalidad-inicio', component: MunicipalidadInicio,
        data: { title: 'Inicio | Dashboard Municipalidad | Puntos Verdes' }
      },
    ]
  },
  {
    path: 'recolector',
    component: RecolectorLayout,
    children: [
      {
        path: 'recolector-inicio', component: RecolectorInicio,
        data: { title: 'Inicio | Dashboard Recolector | Puntos Verdes' }
      },
    ]
  },
  {
    path: 'ciudadano',
    component: CiudadanoLayout,
    children: [
      {
        path: 'ciudadano-inicio', component: CiudadanoInicio,
        data: { title: 'Inicio | Dashboard Ciudadano | Puntos Verdes' }
      },
    ]
  }

];
