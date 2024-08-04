import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { IProduct } from '../../shared/models/product.interface';
import { ProductApiService } from '../../shared/services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../../states/cart/cart.action';
import * as ProductActions from '../../states/product/product.action';
import * as ProductSelectors from '../../states/product/product.selector';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
 
  http = inject(HttpClient);
  productApi= inject(ProductApiService);
  product$!: Observable<IProduct[]>;
  error$!: Observable<string | null>;

  constructor(private store: Store<{cart: {products: IProduct[]}}>){
    this.store.dispatch(ProductActions.loadProduct());
    this.product$ = this.store.select(ProductSelectors.selectAllProducts);
    this.error$ = this.store.select(ProductSelectors.selectProductError);
  }
  ngOnInit(): void {
  }

  addItemToCart(product: IProduct){
    this.store.dispatch(addToCart({product}));
  }
}
