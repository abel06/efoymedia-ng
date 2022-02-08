import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthRequestDTO } from 'src/app/data/dtos/auth-request-dto';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/utils/validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  submited = false;
  hide = false;

  // isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        firstname: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(16),
          ],
        ],
        lastname: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(16),
          ],
        ],
        email: [
          '',
          [Validators.required, Validators.email],
          // [this.asyncValidatorsUtil.validateEmail()],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.maxLength(16),
            Validators.minLength(8),
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator }
    );
  }
  onSubmit() {
    // this.submited = true;
    // // console.log(JSON.stringify(this.registrationForm.value));
    // this.registrationService.
    // addUser(this.registrationForm.value)
    //   .toPromise()
    //   .then((data) => {});
    this.submited = true;
    this.authService.signup(this.requestDTO()).subscribe();
  }

  get f() {
    return this.registrationForm.controls;
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

  attachEmailAsync() {
    // this.f.email.setAsyncValidators([this.asyncValidatorsUtil.validateEmail()]);
    // this.f.email.setAsyncValidators([this.asyncValidatorsUtil.validateEmail()]);
    this.f['email'].updateValueAndValidity();
  }
  detachEmailAsync() {
    this.f['email'].clearAsyncValidators();
    this.f['email'].updateValueAndValidity();
  }
}
