import { AuthenticationService } from 'src/services/auth.service';
import { Component, OnChanges, SimpleChange } from '@angular/core';
import { Cart } from 'src/models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngEcommerce';
  public isCollapsed : boolean=true;
  
  constructor(public cartService : Cart, public authService:AuthenticationService){ }

 
}
