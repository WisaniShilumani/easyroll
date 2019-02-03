import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { modules, MatModules } from '../../../test.imports/modules.list'
import { CreatePayslipDialogComponent } from './create-payslip-dialog.component'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
describe('CreatePayslipDialogComponent', () => {
  let component: CreatePayslipDialogComponent
  let fixture: ComponentFixture<CreatePayslipDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...modules,
        ...MatModules
      ],
      declarations: [ CreatePayslipDialogComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayslipDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
