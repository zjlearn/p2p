import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private protducts: Array<InvestProduct>;

  constructor() { }

  ngOnInit() {
  //  初始化数组
    this.protducts = [
      new InvestProduct(1, 'df', 'df'),
      new InvestProduct(1, 'df ', 'df'),
      new InvestProduct(1, 'df ', 'df'),
      new InvestProduct(1, 'df ', 'df')
    ];

  }

}

export class InvestProduct{
  constructor(
    public id: number,
    public name: String,
    public desc: String
  ) { }
}
