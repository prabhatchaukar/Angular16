import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
    private products = [
    { id: 101, name: 'Laptop', price: 55000 },
    { id: 102, name: 'Mobile', price: 20000 },
    { id: 103, name: 'Headphones', price: 2500 }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
