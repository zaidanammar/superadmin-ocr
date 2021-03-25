export const toRupiah = (number: number) => {
  return ('Rp. ' + new Intl.NumberFormat(['ban', 'id']).format(number))
}