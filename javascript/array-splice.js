function panggilSplice() {
  var kota = ['bandung','jakarta','medan','surabaya']
  console.log(kota);
  kota.splice(2,0);
  return kota;
}

console.log(panggilSplice());
