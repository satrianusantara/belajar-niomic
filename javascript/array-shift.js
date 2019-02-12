//shift akan menghapus data array yang paling pertama

function panggilShift() {
  var kota =['jakarta','bandung','surabaya','malang','medan','makassar']
  console.log(kota);
  console.log("===============");
  // kota = kota.shift();

  kota2 = kota.shift()
  console.log(kota2);
  return kota
}
console.log(panggilShift());
