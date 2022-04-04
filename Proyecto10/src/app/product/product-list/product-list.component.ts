import { Component, OnInit } from '@angular/core';

interface Product{
  name: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})




export class ProductListComponent implements OnInit {

  products: Product[] =  [{name:"Palmera de chocolate", image:"https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300", description:"sadas", price:"5"}];
  constructor() { }

  ngOnInit(): void {
  }

}
