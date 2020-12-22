import { Product } from './../../../models/product.model';
import { ProductService } from './../../../services/productService';
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent {
  product:Product = new Product();
  constructor(public activeRoute:ActivatedRoute, public prodService:ProductService, public router:Router) { 
    const id = activeRoute.snapshot.params['id'];
    this.prodService.getProducts().subscribe(data => {
       let prod = data.find(p => p.id == id);
       Object.assign(this.product, prod);
    });
  }

  saveChanges(form:NgForm){
   
    this.prodService.updateProduct(this.product).subscribe();
   this.router.navigateByUrl('/admin-product');
  }

}
