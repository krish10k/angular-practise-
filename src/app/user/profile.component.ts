import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Component({
  templateUrl: "./profile.component.html",
})
export class ProfileComponent {
  profileForm: FormGroup
  firstName
  lastName
  constructor(private authservice: AuthService, private router: Router) { }
  ngOnInit() {
    this.firstName = new FormControl(this.authservice.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.authservice.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authservice.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  cancel() {
    this.router.navigate(['events'])
  }

}