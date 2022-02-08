import {
  AbstractControl,
  AbstractControlDirective,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (
  controls: AbstractControl
): ValidationErrors | null => {
  const password = controls.get('password');
  const confirmPassword = controls.get('confirmPassword');
  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordNotMatch: true }
    : null;
};
