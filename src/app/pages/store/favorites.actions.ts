import { createAction, props } from "@ngrx/store";
import { IFavorites } from "src/app/core/models/IFavorites";

export const add = createAction('[FavoriteProduct] Add',  props<{ product: IFavorites}>());
export const remove = createAction('[FavoriteProduct] Remove', props<{ product: IFavorites }>());
export const increment = createAction('[FavoriteProduct] Increment');
export const decrement = createAction('[FavoriteProduct] Decrement');
export const updateAllState = createAction('[FavoriteProduct] Update all state of favorites products', 
 props<{ products: IFavorites[] }>());
export const clear = createAction('[FavoriteProduct]')