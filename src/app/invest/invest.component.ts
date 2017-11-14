import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/productService';
import {Product} from '../shared/product';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
