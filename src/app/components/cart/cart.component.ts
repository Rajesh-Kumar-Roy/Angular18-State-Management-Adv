import { Component } from '@angular/core';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectCartState } from '../../states/cart/cart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/models/product.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItem$= this.store.select(selectCartProducts);;
  constructor(private store: Store<AppState>){
  }
}
