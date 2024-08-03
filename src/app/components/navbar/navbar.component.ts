import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/models/product.interface';
import { selectCartProducts } from '../../states/cart/cart.selector';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
products$: Observable<IProduct[]>;
constructor(private store: Store<AppState>){
this.products$ = this.store.select(selectCartProducts);
}
}
