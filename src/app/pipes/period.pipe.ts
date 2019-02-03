import { Pipe, PipeTransform } from '@angular/core';
import { startDateToPeriod } from '@utils/period/startDateToPeriod'

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return startDateToPeriod(value)
  }
}
