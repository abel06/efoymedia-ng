import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Home } from './home.model';
import { HomesStore } from './homes.store';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class HomesService {

  constructor(private homesStore: HomesStore,
              private http: HttpClient) {}

  get() {
    return this.http.get<Home[]>(environment.SERVER_URL + 'videos')
     .pipe(
       tap(entities => {this.homesStore.set(entities)
    })
      );
  }

  add(home: Home) {
    this.homesStore.add(home);
  }

//   update(id:ID, home: Partial<Home>) {
//     this.homesStore.update(id, home);
//   }

//   remove(id: ID) {
//     this.homesStore.remove(id);
//   }
}