import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fireLogin: boolean = false
  errorMessage: string = "";
  LoginForm: FormGroup = new FormGroup({

    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[A-z][a-z0-9]{3,8}$/)]),

  })

  get controlName() {
    return this.LoginForm.controls
  }
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }


  login() {



    if (this.LoginForm.valid) {
      console.log('form submitted');
      this.fireLogin = true

    } else {
      this.validateAllFormFields(this.LoginForm);
      console.log('not submitted');

    }


    console.log(this.LoginForm)
    this._auth.login(this.LoginForm.value).subscribe({
      next: (res: any) => {
        if (res.message == "success") {
          localStorage.setItem('userToken', res.token)
          this._auth.saveUserData()
          this._router.navigate(['/home'])
        } else {
          this.errorMessage = res.message
          this.fireLogin = false
        }

      },
      error: (error: any) => {
        this.fireLogin = false
      },
      complete: () => {

      },
    })
  }



  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
