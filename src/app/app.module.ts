import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeuiModule } from './modules/primeui/primeui.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OutputPdfComponent } from './components/output-pdf/output-pdf.component';
import { HeaderPdfComponent } from './components/output-pdf/header-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { AprendiendoComponent } from './components/aprendiendo/aprendiendo.component';
import { BotonComponent } from './components/aprendiendo/boton.component';
import { PadreComponent } from './components/aprendiendo/padre.component';
import { ContactReactivoComponent } from './components/aprendiendo/contact-reactivo.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CotizadorComponent } from './components/cotizador/cotizador.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    CatalogoComponent,
    OutputPdfComponent,
    HeaderPdfComponent,
    AprendiendoComponent,
    BotonComponent,
    PadreComponent,
    ContactReactivoComponent,
    PagenotfoundComponent,
    CotizadorComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeuiModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    NgxSpinnerModule,
    PdfViewerModule,
    FormsModule, 
    FullCalendarModule
  ],
  exports: [
    NgxSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
