export const getDateMonthYearFromISO = (iso: string) => {
  // input : iso string
  // output: Aug 20, 2021 (for bad input returns Invalid Date)
  const d = new Date(iso)
  return d.toLocaleDateString('en-us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
export const stringifyDate = (date: Date) => {
  // input: js date object
  // output: Aug 20, 2021 (for bad input returns Invalid Date)
  return date.toLocaleDateString('en-us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}