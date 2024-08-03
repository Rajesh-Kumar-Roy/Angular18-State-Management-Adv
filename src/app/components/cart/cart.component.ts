import { Component } from '@angular/core';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectCartState, selectTotal } from '../../states/cart/cart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/models/product.interface';
import { decrementProduct, incrementProduct, removeItem } from '../../states/cart/cart.action';
import { increment } from '../../states/counter/counter.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItem$= this.store.select(selectCartProducts);;
  totalPrice$ = this.store.select(selectTotal);
  constructor(private store: Store<AppState>){
  }

  increment(productId: number){
    this.store.dispatch(incrementProduct({productId}));
  }
  decrement(productId: number){
    this.store.dispatch(decrementProduct({productId}));
  }
  removeItem(productId: number){
    this.store.dispatch(removeItem({productId}));
  }
}
