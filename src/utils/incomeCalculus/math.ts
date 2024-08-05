function applyTaxe(
  valueWithoutTaxes: number,
  initialValue: number,
  tax: number,
) {
  const income = (valueWithoutTaxes - initialValue) * tax;

  const finalValue = initialValue + income;

  return finalValue;
}

export function incomeCalculation(
  initialValue: number,
  mounths: number,
  fees: number = 0.0052,
): number {
  const valueWithoutTaxes =
    mounths > 0 ? initialValue * (1 + fees) ** mounths : initialValue;
  let tax: number = 0.185;

  if (mounths < 12) {
    tax = 0.225;
  }

  // if (mounths >= 12 && mounths <= 24) {
  //   tax = 0.185;
  // }

  if (mounths > 24) {
    tax = 0.15;
  }

  return applyTaxe(valueWithoutTaxes, initialValue, tax);
}

export function calculatePeriod(oldDate: Date, todayDate: Date) {
  // Se o dia da data de hoje for maior que o da data anterior entao a quantidade de meses é todos o número de meses que passou
  if (todayDate.getDay() > oldDate.getDate()) {
    return todayDate.getMonth() - oldDate.getMonth();
  }

  // Se não, tem que tirar um dia
  return todayDate.getMonth() - oldDate.getMonth() - 1;
}
