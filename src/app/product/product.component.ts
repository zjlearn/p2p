import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    //  初始化数组
    this.products = [
      new Product('房压贷', 'BR5325', 4.8, 3, 125336, 263),
      new Product('车压贷', 'BR5325',  4.8, 5, 125336, 345),
      new Product('房压贷', 'BR5325',  4.8, 6, 125336, 263),
      new Product('房压贷', 'BR5325',  4.8, 7, 125336, 263),
    ];
  }

}

export class Product {
  public name: string;
  public num: string;
  public rate: number;  // 收益率
  public duration: number;
  public amount: number;
  public completed: number;  // 已完成的数量


  constructor(name: string, num: string, rate: number, duration: number, amount: number, completed: number) {
    this.name = name;
    this.num = num;
    this.rate = rate;
    this.duration = duration;
    this.amount = amount;
    this.completed = completed;
  }
}
