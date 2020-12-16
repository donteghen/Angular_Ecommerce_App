import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/models/order.model';
import { ProductService } from 'src/services/productService';
@Injectable()
export class OrderService {
    private orders: Order[] = [];
    private loaded: boolean = false;
    constructor(private productService: ProductService) {}
    loadOrders() {
      this.loaded = true;
      this.productService.getOrders()
      .subscribe(orders => this.orders = orders);
      }

    getOrders(): Order[] {
      if (!this.loaded) {
        this.loadOrders();
      }
      return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
      return this.productService.saveOrder(order);
    }
    
    updateOrder(order: Order) {
      this.productService.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.
      findIndex(o => o.id == order.id), 1, order);
      });
    }
    deleteOrder(id: number) {
      this.productService.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id), 1);
      });
    }
}