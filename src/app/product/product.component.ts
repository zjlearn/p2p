import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product';
import {ProductService} from '../shared/productService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    //  初始化数组
    this.products = this.productService.getProducts();
  }

}


