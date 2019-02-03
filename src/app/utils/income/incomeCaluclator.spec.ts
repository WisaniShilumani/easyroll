
import { getIncomeTax, calculateIncome } from './incomeCalculator'
describe('income calculator', () => {
  const annualIncome = 100000
  const pensionContribution = 50

  describe('income tax function', () => {
    it('should return a number', () => {
      const incomeTax = getIncomeTax(annualIncome / 12)
      expect(incomeTax).not.toBeNaN()
    })
  })

  describe('income object calculator', () => {
    it('should return an object with the correct properties', () => {
      const income = calculateIncome(annualIncome, pensionContribution)
      expect(income).toBeTruthy()
      expect(income.grossIncome).not.toBeNaN()
      expect(income.incomeTax).not.toBeNaN()
      expect(income.pension).not.toBeNaN()
      expect(income.netIncome).not.toBeNaN()
    })
  })
})
