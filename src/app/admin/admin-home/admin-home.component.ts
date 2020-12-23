import { Product } from 'src/models/product.model';
import { ProductService } from 'src/services/productService';

import { Component} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { Label } from 'ng2-charts';



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  
})
export class AdminHomeComponent {
prodPrices:number[];
orderPrices:number[];
categories:string[];
  constructor(public prodService:ProductService){
    this.prodService.getProducts().subscribe(data =>{
      this.prodPrices = data.map(p => p.price);
      this.categories = data.map(prod => prod.category).filter((cat, index, array) => array.indexOf(cat) == index);
      this.barChartLabels = this.categories;
      this.barChartData.push({ data: this.prodPrices, label: 'Product Prices' }) // = [{ data: this.prodPrices, label: 'Series A' }];
    });

    this.prodService.getOrders().subscribe(ords =>{
      this.orderPrices = ords.map(o => o.cart.cartPrice);
      this.barChartData.push({ data: this.orderPrices, label: 'Order Prices' })
    })
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = []//['2006', '2007', ''];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = []/*[
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ]*/


  }

 

