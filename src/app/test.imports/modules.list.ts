import { HttpClientModule } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routes } from '../app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { Reducers } from '../store/reducers'
import {
  MatFormFieldModule,
  MatInputModule, MatDatepickerModule,
  MatNativeDateModule } from '@angular/material'

import { MatDialogModule } from '@angular/material/dialog'

export const modules = [
  HttpClientModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  StoreModule.forRoot({ ...Reducers }),
  RouterTestingModule
]

export const MatModules = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]

export {
  routes
}
