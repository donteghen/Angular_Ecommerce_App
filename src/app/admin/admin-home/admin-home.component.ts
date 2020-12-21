
import { Observable } from 'rxjs';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { ProductService } from 'src/services/productService';
import { Product } from 'src/models/product.model';
import { FormControl} from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  providers:[DecimalPipe]
})
export class AdminHomeComponent {
  products$:Observable<Product[]>
  products:Product[];
  prodData:Product[];
  filter = new FormControl('');
  page = 1;
  pageSize = 4;
 

  constructor(public prodService: ProductService, pipe:DecimalPipe) { 
    this.prodService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.refreshCountries();
    });
    this.products$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
    
  }
  search(text:string, pipe:PipeTransform):Product[]{
    return this.prodData.filter(prods => {
      console.log(this.products);
      const term = text.toLowerCase();
      return prods.name.toLowerCase().includes(term)
          || pipe.transform(prods.category).includes(term)
          || pipe.transform(prods.description).includes(term);
    });
  }

  refreshCountries() {
    console.log(this.products);
    this.prodData= this.products
      .map((product, i) => ({ ...product}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
