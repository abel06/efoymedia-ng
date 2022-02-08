import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HomesStore, HomesState } from './homes.store';

@Injectable({ providedIn: 'root' })
export class HomesQuery extends QueryEntity<HomesState> {

  constructor(protected override store: HomesStore) {
    super(store);
  }
}
import { ID } from '@datorama/akita';