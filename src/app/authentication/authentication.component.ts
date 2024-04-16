import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoggedUserService } from "../services/logged-user.service";
import { adultValidator } from "./date.validator";
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit {
  formData: any;
  authenticationForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, public loggedUserService: LoggedUserService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUserService.getWhatAClick().subscribe(option => {
      this.loadFormData(option);
    });

    this.authenticationForm = this.fb.group({})
  }

  private loadFormData(option: string | undefined): void {
    this.http.get<any>('assets/json/authentication.json').subscribe(data => {
      if (!option) {
        this.formData = data["registrarse"];
      } else {
        this.formData = data[option];
      }

      this.formData.fields.forEach((field: { name: string; type: string; }) => {
        switch (field.type) {
          case 'text':
            this.authenticationForm.addControl(field.name, this.fb.control('', [Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]/
            )]));
            break;
          case 'password':
            this.authenticationForm.addControl(field.name, this.fb.control('', [Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)]));
            break;
          case 'email':
            this.authenticationForm.addControl(field.name, this.fb.control('', Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)));
            break;
          case 'date':
            this.authenticationForm.addControl(field.name, this.fb.control('', adultValidator(18)));
            break;
        }
      })
      console.log(this.formData);
    });
  }

  onSubmit() {
    if(this.authenticationForm.valid) {
      console.log("Los datos del formulario son: ",this.authenticationForm.value);
      this.loggedUserService.setLoggedUser(true);
      this.router.navigate(['/']);
    } else {
      Object.keys(this.authenticationForm.controls).forEach(field => {
        const control = this.authenticationForm.get(field);
        console.log(control);
        if (control && control.errors && (control.dirty || control.touched)) {
          if (control.errors['minlength']) {
            alert(`${field} debe tener al menos ${control.errors['minlength'].requiredLength} caracteres.`);
          }
          if (control.errors['maxlength']) {
            alert(`${field} no puede tener más de ${control.errors['maxlength'].requiredLength} caracteres.`);
          }
          if (control.errors['pattern']) {
            alert(`Esta fallando ${field} porque no cumple con el formato requerido. Contraseña: Debe contener mayuscula,minuscula numero y simbolo,Nombre de usuario: debe de comenzar con una letra tanto mayuscula como minuscula, Email: Debe de seguir el formato "correo@ejemplo.es".`);
          }
          if (control.errors['notAdult']) {
            alert(`No cumple con la mayoria de edad.`);
          }
        }
      })
      this.authenticationForm.updateValueAndValidity();
    }
  }
}
