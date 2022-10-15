import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { Product } from '../../interfaces/Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe({
      next:(res)=>{
        this.products=res
      
      }, 
      error:(error)=>{
        console.log(error)
      }
  })
    
    // .subscribe(
      //   res => this.products = res,
      //   err => console.log(err)
      // )
  }

  deleteProduct(id?: string): void {
    this.productService.deleteProduct(id!)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.getProducts();
        }, 
        error:(error)=>{
          console.log(error)
        }
    })}

}