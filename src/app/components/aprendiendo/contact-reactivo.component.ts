import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-contact-reactivo',
  templateUrl: './contact-reactivo.component.html',
  styleUrls: ['./contact-reactivo.component.scss']
})
export class ContactReactivoComponent implements OnInit{
  contactForm!: FormGroup ;

  constructor(private fb: FormBuilder, private correo: CorreoService){}

  ngOnInit(): void {
   this.contactForm = this.initForm();
  }

  
  onSubmit(form: FormGroup): void {
    console.log("Valores del formulario ->", form);
    this.correo.PostMensje(form) 
      .subscribe(response => {
        location.href = 'https://formsubmit.co/ariverarm80@gmail.com'
        console.log(response);        
      }, error => {
        console.log(error.responseType);
        console.log({error});        
      })       
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      compania: [''],
      mensaje: ['', [Validators.required, Validators.maxLength(100)]]
    })
    
  }

}
