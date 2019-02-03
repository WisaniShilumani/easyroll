import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { modules } from '../../test.imports/modules.list'
import { MainNavComponent } from './main-nav.component'

describe('MainNavComponent', () => {
  let component: MainNavComponent
  let fixture: ComponentFixture<MainNavComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...modules
      ],
      declarations: [ MainNavComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
