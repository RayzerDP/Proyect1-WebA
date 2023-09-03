import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoComponent } from './componentes/yo/yo.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CreateComponent } from './componentes/create/create.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';

const appRoutes: Routes = [
    { path: '', component:YoComponent }, // Redireccionar a 'sobre-mi' por defecto
    { path: 'sobre-mi', component: YoComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'create', component: CreateComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: '**', redirectTo: '/sobre-mi' }, // Manejar rutas no encontradas
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
    