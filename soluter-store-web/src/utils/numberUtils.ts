export function numberToCurrency(number: number): string {
  const numberString = number.toFixed(2).replace(".", ",");

  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$ ${formattedNumber}`;
}