import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Error } from '@models/handlers/error.model'

import { AppState } from '@store/store.interface'
import { Login } from '@store/actions/auth.actions'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  locationName$: Observable<string>
  roomName$: Observable<string>
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.form = this.formBuilder.group({
      username: ['abc', [Validators.required]],
      password: ['xyz', [Validators.required]],
    })
  }

  login() {
    const formValue = this.form.value
    this.showLoader()
    if (formValue.username === 'abc' && formValue.password === 'xyz') {
      this.dismissLoader()
      this.store.dispatch(new Login())
      this.router.navigateByUrl('admin')
    }
  }

  showLoader () {
    // this.store.dispatch(new ShowLoading('Logging in...'))
  }

  showError (error: Error) {
    // this.store.dispatch(new ShowError(error))
  }

  dismissLoader () {
    // this.store.dispatch(new Dismiss())
  }

  ngOnInit () {

  }

}
