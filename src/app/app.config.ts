import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './states/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     //provideHttpClient(withFetch()), /// withFetch() using only server side angular application
     provideHttpClient(),
     provideStore(),
     provideState({name:'counter', reducer: counterReducer}),
     provideState({name:'cart', reducer: cartReducer}),
  ]
};
