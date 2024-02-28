import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContentComponent } from './components/content/content.component';
import { OutputPdfComponent } from './components/output-pdf/output-pdf.component';
import { AprendiendoComponent } from './components/aprendiendo/aprendiendo.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CotizadorComponent } from './components/cotizador/cotizador.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

const routes: Routes = [
  {path: '', redirectTo: '/content', pathMatch: 'full'},
  {path: 'catalogo', component:CatalogoComponent, title: 'Catálogo', canActivate: []},
  {path: 'content', component: ContentComponent, title: 'Contenido'},
  {path: 'previewer', component: OutputPdfComponent, title: 'Vista Previa'},
  {path: 'aprendiendo', component: AprendiendoComponent, title: 'Aprediendo'},
  {path: 'cotizador', component: CotizadorComponent, title: 'Cotizador'},
  {path: 'calendario', component: CalendarioComponent, title: 'Calendario'},
  {path: '**', component: PagenotfoundComponent, title: 'No encontrada'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
