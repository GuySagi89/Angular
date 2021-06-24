import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  personForm!: FormGroup;

  constructor(private formService: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.formService.group({
      name: ['', [Validators.required]],

      emails: this.formService.group(
        {
          email: ['', [Validators.required, Validators.email]],
          emailConfirm: ['', [Validators.required, Validators.email]],
        },
        { validators: [this.emailConfirmValidation] }
      ),

      countries: this.formService.group(
        {
          originCountry: ['', [Validators.required]],
          destinationCountry: ['', [Validators.required]],
        },
        { validators: [this.countriesEqualalidation] }
      ),
      id: ['', [Validators.required, this.idValidation.bind(this)]],
    });

    this.personForm
      .get('id')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((p) => {
        this.save();
      });
  }

  idValidation(control: AbstractControl): ValidationErrors | null {
    const currentValue: string = control.value;
    if (this.isIsraeliIdNumber(currentValue)) {
      return null;
    }
    return {
      invalidID: true,
    };
  }

  countriesEqualalidation(control: AbstractControl): ValidationErrors | null {
    if (
      control.get('originCountry')?.value !==
      control.get('destinationCountry')?.value
    ) {
      return null;
    }
    return {
      mailsDontMatch: true,
    };
  }

  emailConfirmValidation(control: AbstractControl): ValidationErrors | null {
    if (control.get('email')?.value === control.get('emailConfirm')?.value) {
      return null;
    }
    return {
      mailsDontMatch: true,
    };
  }

  save() {
    console.log(this.personForm);
  }

  isIsraeliIdNumber(id: string) {
    id = String(id).trim();

    if (id.length > 9 || isNaN(+id)) return false;

    id = id.length < 9 ? ('00000000' + id).slice(-9) : id;

    return (
      Array.from(id, Number).reduce((counter, digit, i) => {
        const step = digit * ((i % 2) + 1);

        return counter + (step > 9 ? step - 9 : step);
      }) %
        10 ===
      0
    );
  }
}
