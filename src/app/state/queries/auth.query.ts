import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthResponseDTO } from 'src/app/data/dtos/auth-response-dto';
import { SessionStateDTO } from 'src/app/data/dtos/session-state-dto';
import { AuthStore } from '../stores/auth.store';


@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthResponseDTO> {
  allState$ = this.select();
  selectIsLogin$ = this.select(state => !!state.accessToken);
  selectName$ = this.select('username');

  constructor(protected override store: AuthStore) {
    super(store);
  }
}