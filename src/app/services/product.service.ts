import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private AppUrl = "https://localhost:7125/";
  private ApiUrl = "api/Products/";
  Referencias = "VS: Skinet - BD: Skinet"

  constructor(private http:HttpClient) { }

  guardarProduct(Producto: any) {
    return this.http.post(this.AppUrl + this.ApiUrl, Producto)
  }
  
}
