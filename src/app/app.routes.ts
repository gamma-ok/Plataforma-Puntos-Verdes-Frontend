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

import { Perfil } from './dashboard/views/perfil/perfil';
import { Ranking } from './dashboard/views/ranking/ranking';
import { Campanias } from './dashboard/views/campanias/campanias';
import { PuntosVerdes } from './dashboard/views/puntos-verdes/puntos-verdes';
import { Entregas } from './dashboard/views/entregas/entregas';
import { RecompensasDashboard } from './dashboard/views/recompensas/recompensas';
import { Ayuda } from './dashboard/views/ayuda/ayuda';
import { Acerca } from './dashboard/views/acerca/acerca';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '', component: Inicio,
        data: { title: 'Inicio | Puntos Verdes' }
      },
      {
        path: 'servicios', component: Servicios,
        data: { title: 'Servicios | Puntos Verdes' }
      },
      {
        path: 'usuarios', component: Usuarios,
        data: { title: 'Usuarios | Puntos Verdes' }
      },
      {
        path: 'estadisticas', component: Estadisticas,
        data: { title: 'Estadísticas | Puntos Verdes' }
      },
      {
        path: 'recompensas', component: Recompensas,
        data: { title: 'Recompensas | Puntos Verdes' }
      },
      {
        path: 'contacto', component: Contacto,
        data: { title: 'Contacto | Puntos Verdes' }
      },
      {
        path: 'signup', component: Signup,
        data: { title: 'Registrarse | Puntos Verdes' }
      },
      {
        path: 'login', component: Login,
        data: { title: 'Iniciar sesión | Puntos Verdes' }
      },
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'inicio', component: AdminInicio,
        data: { title: 'Inicio | Dashboard Admin | Puntos Verdes' }
      },
      {
        path: 'perfil', component: Perfil,
        data: { title: 'Perfil | Dashboard Admin | Puntos Verdes' }
      },
      {
        path: 'ranking', component: Ranking,
        data: { title: 'Ranking | Dashboard Admin | Puntos Verdes' }
      }
    ]
  },
  {
    path: 'municipalidad',
    component: MunicipalidadLayout,
    children: [
      {
        path: 'inicio', component: MunicipalidadInicio,
        data: { title: 'Inicio | Dashboard Municipalidad | Puntos Verdes' }
      },
      {
        path: 'perfil', component: Perfil,
        data: { title: 'Perfil | Dashboard Municipalidad | Puntos Verdes' }
      },
      {
        path: 'ranking', component: Ranking,
        data: { title: 'Ranking | Dashboard Municipalidad | Puntos Verdes' }
      }
    ]
  },
  {
    path: 'recolector',
    component: RecolectorLayout,
    children: [
      {
        path: 'inicio', component: RecolectorInicio,
        data: { title: 'Inicio | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'perfil', component: Perfil,
        data: { title: 'Perfil | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'ranking', component: Ranking,
        data: { title: 'Ranking | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'campanias', component: Campanias,
        data: { title: 'Campañas | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'puntos-verdes', component: PuntosVerdes,
        data: { title: 'Puntos Verdes | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'entregas', component: Entregas,
        data: { title: 'Mis Entregas | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'recompensas', component: RecompensasDashboard,
        data: { title: 'Recompensas | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'ayuda', component: Ayuda,
        data: { title: 'Ayuda | Dashboard Recolector | Puntos Verdes' }
      },
      {
        path: 'acerca', component: Acerca,
        data: { title: 'Acerca de | Dashboard Recolector | Puntos Verdes' }
      }
    ]
  },
  {
    path: 'ciudadano',
    component: CiudadanoLayout,
    children: [
      {
        path: 'inicio', component: CiudadanoInicio,
        data: { title: 'Inicio | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'perfil', component: Perfil,
        data: { title: 'Perfil | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'ranking', component: Ranking,
        data: { title: 'Ranking | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'campanias', component: Campanias,
        data: { title: 'Campañas | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'puntos-verdes', component: PuntosVerdes,
        data: { title: 'Puntos Verdes | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'entregas', component: Entregas,
        data: { title: 'Mis Entregas | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'recompensas', component: RecompensasDashboard,
        data: { title: 'Recompensas | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'ayuda', component: Ayuda,
        data: { title: 'Ayuda | Dashboard Ciudadano | Puntos Verdes' }
      },
      {
        path: 'acerca', component: Acerca,
        data: { title: 'Acerca de | Dashboard Ciudadano | Puntos Verdes' }
      }
    ]
  }
];
