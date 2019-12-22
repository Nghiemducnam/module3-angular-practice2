import { FormControl } from '@angular/forms';
export function gmailValidator(formControl: FormControl) {
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true };
}
