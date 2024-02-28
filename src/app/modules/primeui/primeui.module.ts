import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { TreeModule } from 'primeng/tree';
import { DialogModule } from 'primeng/dialog';


const PrimengUI = [
  InputTextModule,
  ButtonModule,
  ToastModule,
  CheckboxModule,
  SidebarModule,
  RippleModule,
  StyleClassModule,
  CarouselModule,
  DividerModule,
  FormsModule,
  FileUploadModule,
  InputTextareaModule,
  DropdownModule,
  InputSwitchModule,
  TabViewModule,
  CalendarModule,
  InputNumberModule,
  MessagesModule,
  TreeModule,
  DialogModule
]

@NgModule({
  imports: [PrimengUI],
  exports: [PrimengUI]
})
export class PrimeuiModule { }
