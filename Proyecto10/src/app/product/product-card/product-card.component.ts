import { Component, Input, OnInit } from '@angular/core';

interface Product{
  name: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input("product") product!: Product;
  units: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  addToShoppingCart(){

  }

  deleteFromShoppingCart(){

  }
}
