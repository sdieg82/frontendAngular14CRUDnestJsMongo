import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl:'./product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product={
    name:'',
    description:'',
    price:0,
    imageURL:''
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

}
