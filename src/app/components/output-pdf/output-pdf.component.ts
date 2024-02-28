import { Component } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-output-pdf',
  templateUrl: './output-pdf.component.html',
  styleUrls: ['./output-pdf.component.scss']
})
export class OutputPdfComponent {
  pdfSrc = "assets/files/Factura.pdf" ;
  pageVariable = 1;
  fileName = "Factura.pdf"
  zoom = 0.58;
  zoomMax = 2;
  zoomMin= 0.5;
  zoomAmt = 0.2;
  zoomScale = "'page-width'"
  totalPages = 0;
  pdf!: PDFDocumentProxy;
  documentDefinition!: object;
  generatedPDF!: any;


  setZoom(type: string): void{
    if(type === 'increment') {
      this.zoom += this.zoomAmt;
    }else if (type === 'decrement') {
      this.zoom -= this.zoomAmt;
    }
  }

  download(): void {
    const blob = new Blob([this.pdfSrc], {type: 'application/pdf'})
    console.log(blob);
    const data = window.URL.createObjectURL(blob); 
            
    // This work with IE 
    const _win = window.navigator as any
    if(_win && _win.msSaveOrOpenBlob) {
      _win.msSaveOrOpenBlob(blob)      
      return
    } else  {
      const link = document.createElement('a');      
      link.href = data;
      link.download = this.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    setTimeout(()=> {
      window.URL.revokeObjectURL(data)
    }, 100)

  }

  print(): void{
  
    const prevFrames = document.querySelectorAll('iframe[name="pdf-frame"]')
    if(prevFrames.length) {
      prevFrames.forEach((item) => item.remove())
    }

    const blob = new Blob([this.pdfSrc], { type: 'application/pdf' });
    const objURL = URL.createObjectURL(blob);

    const frame = document.createElement("iframe");
    frame.style.display = "none";
    frame.src = objURL;

    document.body.appendChild(frame);
    frame.name = "pdf-frame";
    frame.focus();

    // if(this.isIE() || this.isEdge()) {
    //   frame.contentWindow?.document.execCommand("print", false, "null");
    // }else {
    //   frame.contentWindow?.print();
    // }

  }

  isIE(): boolean {
    return navigator.userAgent.lastIndexOf('MSIE') !== -1
  }

  isEdge(): boolean{
    return this.isIE() && !!window.MediaList
  }

  afterLoadComplete(pdf: PDFDocumentProxy): void {
    this.pdf = pdf
    this.totalPages = pdf.numPages
  }

  generatePDF(): void{
    this.documentDefinition = {
      pageSize: 'A4',
      pageOrientation: 'lanscape',
      pageMargins: [40, 60, 40, 60],
      content:[]
    }
    // this.generatedPDF = pdfMake.createPdf(this.documentDefinition)    
    // this.generatedPDF.getBuffer((buffer: any) => {
    //   this.pdfSrc = buffer
    // })


  }

  createPDF(): void {
    const pdfDefinition: any = {
      content: [{
        text: 'Hasta el día de hoy'
      }]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download();
  }

  

}

