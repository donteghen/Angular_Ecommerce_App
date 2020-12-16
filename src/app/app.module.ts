import { OrderService } from './../services/order.service';
import { ConnectionService } from './../services/connection.service';
import { BackToTopComponent } from './ui/main/backToTop.component';
import { Cart } from './../models/cart.model';
import { Order } from './../models/order.model';
import { ProductRepository } from './../models/product.repository';
import { NotFoundComponent } from './ui/main/notFound.component';
import { AboutComponent } from './ui/main/about.component';
import { WidgetComponent } from './ui/views/widget.component';
import { ProductShowComponent } from './ui/views/productShow.component';
import { ProductMixStylesComponent } from './ui/views/productMixStyles.component';
import { OfferComponent } from './ui/views/offer.component';
import { IstagramViewComponent } from './ui/views/istagramView.component';
import { CarouselComponent } from './ui/views/carousel.component';
import { UserComponent } from './ui/main/user.component';
import { StoreComponent } from './ui/main/store.component';
import { RegisterComponent } from './ui/main/register.component';
import { ProductDetailComponent } from './ui/main/productDetail.component';
import { LoginComponent } from './ui/main/login.component';
import { DashboardComponent } from './ui/main/dashboard.component';
import { ContactComponent } from './ui/main/contact.component';
import { CheckoutComponent } from './ui/main/checkout.component';
import { CartComponent } from './ui/main/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from 'src/services/productService';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent, CartComponent, CheckoutComponent, ContactComponent, DashboardComponent, LoginComponent, ProductDetailComponent,
    RegisterComponent, StoreComponent, UserComponent, CarouselComponent,IstagramViewComponent, OfferComponent, ProductMixStylesComponent,
    ProductShowComponent, WidgetComponent,AboutComponent, NotFoundComponent, BackToTopComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule, NgxPaginationModule,
    NgbModule, FormsModule, HttpClientModule, CommonModule
  ],
  providers: [ProductService, ProductRepository, Order, Cart, ConnectionService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
