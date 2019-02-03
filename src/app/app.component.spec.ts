import { TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing'
import { StoreModule, Store, combineReducers } from '@ngrx/store'
import { AppComponent } from './app.component'
import { modules, MatModules, routes } from './test.imports/modules.list'
import { navComponents, employeeTableComponents, payslipTableComponents, pageComponents } from './test.imports/components.list'
import { pipes } from './test.imports/pipes.list'
import { providers } from './test.imports/services.list'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { AppState } from '@store/store.interface'
import { Reducers } from '@store/reducers'
import { Login } from '@store/actions/auth.actions'
describe('AppComponent', () => {
  let fixture
  let router: Router
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...modules,
        ...MatModules,
        RouterTestingModule.withRoutes(routes),
        StoreModule.forRoot({...Reducers})
      ],
      declarations: [
        AppComponent,
        ...navComponents,
        ...employeeTableComponents,
        ...payslipTableComponents,
        ...pageComponents,
        ...pipes
      ],
      providers: [
        ...providers
      ]
    }).compileComponents()

    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()
    fixture = TestBed.createComponent(AppComponent)
    router = TestBed.get(Router)
    router.initialNavigation()
    fixture.detectChanges()
  }))

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'easyroll'`, () => {
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('easyroll')
  })

  it('should render title in a h1 tag on the login page', fakeAsync(() => {
    router.navigate([''])
    tick()
    const compiled = fixture.debugElement
    expect(compiled.nativeElement.querySelector('h1').textContent).toContain('easyroll')
  }))

  it('should dispatch an action to load data when created', () => {
    const action = new Login()
    store.dispatch(action)
    expect(store.dispatch).toHaveBeenCalledWith(action)
  })
})
