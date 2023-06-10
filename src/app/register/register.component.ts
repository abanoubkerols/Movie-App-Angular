import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  flag: boolean = false
  fireRegister: boolean = false
  errorMessage: string = "";


  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[A-z][a-z0-9]{3,8}$/)]),
    age: new FormControl("", [Validators.required, Validators.min(16), Validators.max(36)])
  })



  get controlName() {
    return this.registerForm.controls
  }


  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  register() {  
    console.log(this.registerForm)


    

    if (this.registerForm.valid) {
      console.log('form submitted');
      this.fireRegister = true;
    } else {
      this.validateAllFormFields(this.registerForm); 
      console.log('not submitted');

    }


 

    this._auth.register(this.registerForm.value).subscribe({
      next: (res: any) => {
        if (res.message == "success") {
          this.errorMessage = ''
          this._router.navigate(['/login'])

        } else {
          this.errorMessage = res.message
          this.fireRegister = false;

        }
      },
      error: (error: any) => {this.errorMessage = error.message 
        this.fireRegister = false;
      },
      complete: () => console.log("complete")
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

   


 



  