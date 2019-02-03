import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { modules, MatModules } from '../../test.imports/modules.list'
import { UpdateEmployeeDialogComponent } from './update-employee-dialog.component'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
describe('UpdateEmployeeDialogComponent', () => {
  let component: UpdateEmployeeDialogComponent
  let fixture: ComponentFixture<UpdateEmployeeDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...modules,
        ...MatModules
      ],
      declarations: [ UpdateEmployeeDialogComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
