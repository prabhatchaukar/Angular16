import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  // ✅ Dependency Injection (service is injected automatically by Angular)
  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
