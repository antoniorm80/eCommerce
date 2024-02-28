import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
  providers: [MessageService]
})


export class CatalogoComponent implements AfterViewInit{
  formProducto: FormGroup;
  fechaRegistro: string | undefined;
  date: Date = new Date();
  fecha = new Date();
  
  @ViewChild('Nombre') inputNombre!: ElementRef;
  @ViewChild('fechaRegistro') inputFechaActual!: ElementRef;
    
  constructor(private fb: FormBuilder, 
    private _productService: ProductService,
    private messageService: MessageService   
    ){
    this.formProducto = this.fb.group({
      Nombre:["", Validators.required],
      Cantidad: ["", Validators.required], 
      Categoria: ["", Validators.required],
      Descripcion: [""],
      FechaRegistro: [this.fecha.toLocaleDateString()]
    });
  }
  
  ngAfterViewInit(): void {
    this.inputNombre.nativeElement.focus();
  }

ngOnInit(): void {
  // alert("Iniciando");
  // console.log("Iniciando");

//   // alert(fecha);
//   const ahora = fecha.toLocaleDateString();
//   console.log(fecha.toLocaleDateString());
//   console.log(fecha.toLocaleString()); // 👉️ "7/31/2023, 5:38:01 PM"
// console.log(fecha.toLocaleDateString()); // 👉️ "7/31/2023"
// console.log(fecha.toLocaleTimeString()); // 👉️ "5:38:01 PM"

// console.log(fecha.toUTCString()); 

}

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  GuardarProducto () {
    console.log(this.formProducto);   

    const Producto: any  = {
      Nombre: this.formProducto.get("Nombre")?.value,
      Cantidad:  this.formProducto.get("Cantidad")?.value,
      Categoria: this.formProducto.get("Categoria")?.value,
      Descripcion: this.formProducto.get("Descripcion")?.value
    }

    this._productService.guardarProduct(Producto).subscribe( data => {
      this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Se guardó correctamente' });
      this.formProducto.reset(); 
      
    }, error => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo agregar' })
    });
  }

  onFecha(): void {  
    // this.inputFechaActual.nativeElement.value = this.fecha.toLocaleDateString();
    //  this.formProducto['fechaRegistro'].value =  this.fecha.toLocaleDateString();
    console.log(this.inputFechaActual); 
    this.inputNombre.nativeElement.focus(); 
  }

}
