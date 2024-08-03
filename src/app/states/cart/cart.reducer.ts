import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
//import { addToCart, incrementProduct } from "./cart.action";
import * as CartAction from './cart.action';
export interface CartState{
    proudcts: IProduct[];
    totalPrice?: number;
}

export const initialCartState: CartState ={
    proudcts: []
}


export const cartReducer = createReducer(
    initialCartState,
    on(CartAction.addToCart,(state,{ product })=>{
        const updatedProducts = [...state.proudcts, product]
        return{
            ...state,
            proudcts: updatedProducts
        }
    }),

    on(CartAction.incrementProduct,(state, {productId})=>{
        const updatedProducts = state.proudcts.map((product)=> product.id === productId ? {...product, quantity: product.quantity + 1} : product);
        return {
            ...state,
            proudcts: updatedProducts
        }
    }),

    on(CartAction.decrementProduct, (state, { productId }) => {
        const updatedProducts = state.proudcts.map((product) => product.id === productId ? { ...product, quantity: product.quantity - 1 } : product);
        return {
            ...state,
            proudcts: updatedProducts
        }
    }),

    on(CartAction.removeItem, (state, { productId }) => {
        const updatedProducts = state.proudcts.filter((product)=> product.id !== productId);
        return {
            ...state,
            proudcts: updatedProducts
        }
    }),
)