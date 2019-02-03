const getIncomeTax = (income: number) => {
  const intervals = [
    0,
    18200,
    37000,
    80000,
    180000,
  ]

  switch (true) {
    case income >= 0 && income <= intervals[1]:
      return 0

    case income >= intervals[1] && income <= intervals[2]:
      return 0.19 * Math.round(income - intervals[1])

    case income >= intervals[2] && income <= intervals[3]:
      return 3572 + 0.325 * Math.round(income - intervals[2])

    case income >= intervals[3] && income <= intervals[4]:
      return 17547 + 0.37 * Math.round(income - intervals[3])

    case income >= intervals[4]:
      return 54547 + 0.45 * Math.round(income - intervals[4])

    default:
      return 0
  }
}

const calculateIncome = (annualIncome: number, pensionContribution: number) => {
  const grossIncome = annualIncome / 12
  const incomeTax = getIncomeTax(annualIncome) / 12

  return {
    incomeTax: Math.abs(Math.round(incomeTax)),
    netIncome: Math.round(grossIncome - incomeTax),
    pension: Math.round((pensionContribution / 100) * grossIncome),
    grossIncome: Math.round(grossIncome)
  }
}

export { calculateIncome, getIncomeTax }
