import { createReducer, on } from "@ngrx/store";
import { AppState } from "./favorites.state";
import { add, clear, decrement, increment, remove, updateAllState } from "./favorites.actions";

export interface State {
    contador: number;
}

export const countInitialState: State = {
    contador: 0
}

export const _counterReducer = createReducer(
    countInitialState,
    on(increment, (state) => ({contador:state.contador +1})),
    on(decrement, (state) => ({contador:state.contador -1})),
    on(clear, (state) => ({contador: 0}))
    );

    export function counterReducer(state: any, action: any) {
        return _counterReducer(state, action);
    }
    
    export const selectContador = (state: State) => state.contador;


export const initialState: AppState = {
    products:[],
  };
  
  export const favoriteReducer = createReducer(
    initialState,
    on(add, (state, {product}) => (
      {
        ...state,
        products: [...state.products, product]
      }
    )
    ),
    on(remove, (state, {product}) => ({
      ...state,
      products: state.products.filter((p)=> product.id != p.id)
    })),
    on(updateAllState, (state, {products}) => (
      {
        ...state,
        products
      }
    )
    ),
    on(clear, state => initialState)
  );