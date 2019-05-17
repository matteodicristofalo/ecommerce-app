import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts().subscribe(res => this.products = res);
  }

}
