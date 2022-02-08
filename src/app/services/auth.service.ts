import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../data/models/user';
import { AuthRequestDTO } from '../data/dtos/auth-request-dto';
import { AuthResponseDTO } from '../data/dtos/auth-response-dto';
import { LoadedUser } from '../data/dtos/loaded-user';
import { AuthStore } from '../state/stores/auth.store';
import { AuthQuery } from '../state/queries/auth.query';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(
    private authStore: AuthStore,
    private http: HttpClient,
    private authQuery: AuthQuery,
    private router: Router
  ) {}

  signup(authRequestDTO: AuthRequestDTO) {
    return this.http.post<AuthResponseDTO>(
      '',
      authRequestDTO
    );
  }


  autologOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration);
  }

  login(authRequestDTO: AuthRequestDTO) {
    return this.http
        .post<AuthResponseDTO>(
            environment.SERVER_URL + "auth/token/",
            authRequestDTO
        ).pipe(
            tap(user => {
                catchError(this.handleError)
                this.authStore.update(user)
                this.handleAuth()
                
            })
        )
}

autologIn() {
  
    const userData: LoadedUser = JSON.parse(
        localStorage.getItem('userData') || '{}'
    );
    
    if (!userData) {
        return;
    }
    const loadedUser = new User(
      userData.email,
      userData.username,
      userData.accessToken,
      userData.refreshToken
    );

    if (loadedUser.token) {
        this.user.next(loadedUser);
        this.authStore.update(loadedUser as unknown as AuthResponseDTO)
    }
}

logOut() {
    this.user.next(null);
    this.router.navigate(['/sign-in']);
    this.authStore.destroy();
    localStorage.removeItem('userData');
}

private handleAuth() {
    this.authQuery.selectIsLogin$.subscribe(val => console.log(val))
    this.authQuery.select().subscribe(user => {
        // const newUser = user as unknown as User
        const newUser = new User(
          user.email,
          user.username,
          user.accessToken,
          user.refreshToken
        );
        this.user.next(newUser);
        localStorage.setItem('userData', JSON.stringify(newUser));
    })

}

private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
            errorMessage = 'This email already exist';
            break;
        case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email does not exist';
            break;
        case 'INVALID_PASSWORD':
            errorMessage = 'This password is not correct';
            break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            errorMessage =
                'Access to this account has been temporarily disabled due to many failed logIn attempts';
            break;
    }
    return throwError(errorMessage);
}
}
