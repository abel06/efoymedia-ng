import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface HomesState extends EntityState<Home, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'homes' })
export class HomesStore extends EntityStore<HomesState> {

  constructor() {
    super();
  }
}