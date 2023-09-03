import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { YoComponent } from './componentes/yo/yo.component';
import {routing, appRoutingProviders} from './app.routing';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CreateComponent } from './componentes/create/create.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { StickyHeaderDirective } from './sticky-header.directive';
import { MenuIconDirective } from './menu-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    YoComponent,
    ProyectosComponent,
    CreateComponent,
    EducationComponent,
    SkillsComponent,
    StickyHeaderDirective,
    MenuIconDirective
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
