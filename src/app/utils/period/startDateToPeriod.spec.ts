import { startDateToPeriod } from './startDateToPeriod'
import * as moment from 'moment'

describe('start date to period function', () => {
  const date = (new Date()).toISOString()

  it('should return a string with dates seperated by a hyphen', () => {
    const period = startDateToPeriod(date)
    const [ date1, date2 ] = period.split(' - ')
    expect(period).toContain(' - ')
    expect(moment(date1).format('DD MMMM')).toEqual(moment(date).format('DD MMMM'))
    expect(moment(date2).format('DD MM YYYY').length).toEqual(moment(date).format('DD MM YYYY').length)
  })
})
