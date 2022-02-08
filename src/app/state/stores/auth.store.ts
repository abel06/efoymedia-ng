import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { AuthResponseDTO, createInitial__AuthResponseDTO__State } from 'src/app/data/dtos/auth-response-dto';



@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class AuthStore extends Store<AuthResponseDTO> {

  constructor() {
    super(createInitial__AuthResponseDTO__State());
  }
}