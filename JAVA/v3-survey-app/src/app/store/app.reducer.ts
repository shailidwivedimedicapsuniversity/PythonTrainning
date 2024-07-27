import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RouterStateUrl } from '../utils'; 
import {InjectionToken} from '@angular/core';

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer as any,
};


export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('table', { factory: () => reducers });
