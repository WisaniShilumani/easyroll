import * as moment from 'moment'

const startDateToPeriod = (startDate: string) => {
  const periodStart = moment(startDate)
  const periodEnd = moment(periodStart).add(1, 'M').subtract(1, 'day')
  return `${periodStart.format('DD MMMM')} - ${periodEnd.format('DD MMMM')}`
}

export { startDateToPeriod }
