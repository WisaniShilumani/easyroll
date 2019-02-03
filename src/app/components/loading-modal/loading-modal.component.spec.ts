import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { modules, MatModules } from '../../test.imports/modules.list'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { LoadingModalComponent } from './loading-modal.component'

describe('LoadingModalComponent', () => {
  let component: LoadingModalComponent
  let fixture: ComponentFixture<LoadingModalComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...modules,
        ...MatModules
      ],
      declarations: [ LoadingModalComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
