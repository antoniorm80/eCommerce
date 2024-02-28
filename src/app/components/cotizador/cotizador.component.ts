import { Component, OnInit, numberAttribute } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { elementAt } from 'rxjs';
import { NodeService } from 'src/app/services/node.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// var Roboto = require('../fonts/Roboto');
// var pdfmake = require('../js/index');
// pdfmake.addFonts(Roboto);

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss'],
  providers: [MessageService]
})
export class CotizadorComponent implements OnInit{
  files!: TreeNode[] | any;
  selectedFiles!: TreeNode[] | any;
  sumaTotal: number = 0;
  servicios: string[]= [];
  value1!: string;
  quantities: number[] = [1, 1, 1];


  constructor(private nodeService: NodeService, private messageService: MessageService){ }

  ngOnInit(): void {
    this.nodeService.getFiles().then((data) => (this.files = data));
  }

  nodeExpand(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
}

nodeCollapse(event: any) {
    this.messageService.add({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
}

nodeSelect(event: any) {
    this.servicios.push(event.node.label);  
    this.sumaTotal += 500;
    
   // this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
}

nodeUnselect(event: any) {
  let element!: number;
   for (let i = 0; i < this.servicios.length; i++) {
      if( this.servicios[i] === event.node.label) 
      {
        element = i;
      }
   }
  this.servicios.splice(element, 1); 
  this.sumaTotal -= 500;
    //this.messageService.add({ severity: 'error', summary: 'Node Unselected', detail: event.node.label });
}

  async createPDF(opcion: string) {
    const pdfDefinition: any = {
      header: '',
      image: await this.getBase64ImageFromURL("assets/images/Logo.png"),
      footer: {
        columns: [          
          { text: '1/1', alignment: 'center' }
        ]
      },
      watermark: { text: 'Plantilla', color: 'gray', opacity: 0.03, bold: true, italics: false, fontSize: 100 },
      content: [
       {
        image: await this.getBase64ImageFromURL("assets/images/Logo.png"),
			  width: 150,
        height: 150,
       },           
        {
          stack: [
            // second column consists of paragraphs
            'Nombre: Antonio Rivera Murillo',
            'Edad: 34',
            'Genero: Masculino',
            'Fecha de Nacimiento: 26-Nov-1989.\n\n',            
          ],
          fontSize: 10,
          bold: false
        },
        {
          text: ''
        },
        { qr: 'text in QR', fit: '80'},
        '\n\n',
        {
          text: 'This is a header, using header style',
          style: 'header'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
          text: 'Subheader 1 - using subheader style',
          style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',        
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',      
        {
          text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
          style: ['quote', 'small']
        }
      
    ],
    styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      }
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    if (opcion ==='abrir') {
      pdf.open();
    }else {
      pdf.download();
    }
    
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }
  
}
