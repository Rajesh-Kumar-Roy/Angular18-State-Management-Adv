import { createAction, props } from "@ngrx/store";
import{IProduct} from '../../shared/models/product.interface'

export const loadProduct = createAction(
    '[Product Component] LoadProduct');

export const loadProductSuccess = createAction(
        '[Product Component] LoadProeductSuccess',
        props<{products: IProduct[]}>()
    );
    
    export const loadProductFailure = createAction(
        '[Product Component] LoadProeductFailure',
        props<{errorMessage: string}>()
    );
