import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id;
  product;

  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct(this.id);
  }

  getProduct(id) {
    this.service.getProduct(id).subscribe(res => this.product = res);
  }

  addCart(product) {
    this.service.addCart(product).subscribe(
      res => {
        this.router.navigate(['/cart']);
      },
      err => {
        console.log(err);
        if(err.status === 401) {
          this.router.navigate(['/login']);
        }     
      }
    );
  }

}
