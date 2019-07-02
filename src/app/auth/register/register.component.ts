import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import {setToLocalStorage} from "../../utils/local-storage";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public emailExist = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstFormGroup: new FormGroup({
        emailAddress: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        passConfirm: new FormControl('', [
          Validators.required,
          this.passValidator
        ]),
        pass: new FormControl('', [Validators.required])
      }),
      secondFormGroup: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required)
      }),
      lastFormGroup: new FormGroup({
        age: new FormControl('', Validators.required),
        dob: new FormControl('', Validators.required)
      })
    });
  }

   passValidator = () => {
    if (this.registerForm && this.registerForm.get('firstFormGroup')) {
      return this.registerForm.get('firstFormGroup.pass').value ===
      this.registerForm.get('firstFormGroup.passConfirm').value
        ? null
        : {
          passValidator: {
            valid: false
          }
        };
    }
  }

  checkEmail(email) {
    this.authService.confirmEmail(email).subscribe(res => {
      console.log(res);
      if (res) {
        this.registerForm
          .get('firstFormGroup.emailAddress')
          .setErrors({incorrect: true});
        this.emailExist = true;
        console.log(email);
      }
    });
  }

  registerUser() {
    const userData: any = {};
    userData.email = this.registerForm.value.firstFormGroup.email;
    userData.password = this.registerForm.value.firstFormGroup.password;
    userData.firstName = this.registerForm.value.secondFormGroup.firstName;
    userData.lastName = this.registerForm.value.secondFormGroup.lastName;
    userData.address = this.registerForm.value.secondFormGroup.address;
    userData.age = this.registerForm.value.lastFormGroup.age;
    userData.dob = this.registerForm.value.lastFormGroup.dob;

    this.authService.register(userData).subscribe(res => {
      this.router.navigate(['dashboard']).then();
      setToLocalStorage('FINLEX_USER', userData);
    }, error => {
      this.router.navigate(['dashboard']).then();

    });
    // :TODO Remove after API is ready
    setToLocalStorage('FINLEX_USER', userData);
  }
}
