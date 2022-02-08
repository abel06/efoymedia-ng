import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthRequestDTO } from '../../../data/dtos/auth-request-dto';


@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss'],
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  isLoading = false;
  error: string | null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  //when logIn button is clicked
  onlogIn() {
    this.isLoading = true;
    var x = this.authService.login(this.requestDTO()).subscribe(
      (resData) => {
        this.isLoading = false;
        this.router.navigate(['/']);
        console.log(resData);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
    console.log(x);
  }
  get f() {
    return this.logInForm.controls;
  }
  requestDTO() {
    const authRequestDTO: AuthRequestDTO = {
      username: this.f['email'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      returnSecureToken: true,
    };

    return authRequestDTO;
  }
}
