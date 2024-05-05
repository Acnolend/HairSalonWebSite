import { AbstractControl, ValidatorFn } from '@angular/forms';

export function adultValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const birthDate = new Date(control.value);
    const now = new Date();

    const age = calculateAge(birthDate, now);

    if (age < minAge) {
      return { 'notAdult': true };
    }

    if (birthDate > now) {
      return { 'futureDate': true };
    }

    return null;
  };
}

function calculateAge(birthDate: Date, now: Date): number {
  const diffTime = now.getTime() - birthDate.getTime();
  const age = Math.floor(diffTime / (1000 * 3600 * 24 * 365)); // Aproximadamente 365 días en un año
  return age;
}
