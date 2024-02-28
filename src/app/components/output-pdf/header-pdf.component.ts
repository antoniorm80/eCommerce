import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header-pdf',
  templateUrl: './header-pdf.component.html',
  styleUrls: ['./header-pdf.component.scss']
})
export class HeaderPdfComponent {
  @Input() fileName!: string 
  @Input() currentPage!: number
  @Input() totalPages!: number
  @Input() zoomAmt!: number
  @Input() zoomMax!: number
  @Input() zoomMin!: number  

  @Output() setZoom: EventEmitter<any> = new EventEmitter()
  @Output() download: EventEmitter<any> = new EventEmitter()
  @Output() print: EventEmitter<any> = new EventEmitter()

  onDownload(event: any) {  
    this.download.emit();
  }

  onPrint(event: any){
    this.print.emit();
  }

  zoom(type: string): void {    
    this.setZoom.emit(type);
  }

}
