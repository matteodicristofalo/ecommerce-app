import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products;
  amount: number;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.service.getCart().subscribe(
      res => {
        this.products = res;
        this.amount = 0;
        for(let i = 0; i < this.products.length; i++) {
          this.amount += this.products[i].price;
        }
      },
      err => {
        if(err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  removeCart(product) {
    this.service.removeCart(product.id).subscribe(
      res => {
        this.getCart();
      },
      err => {
        if(err.status === 401) {
          this.router.navigate(['/login']);
        }     
      }
    );
  }

}
