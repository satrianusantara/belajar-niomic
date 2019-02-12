//merubah data array menjadi string
function panggilJoin() {
  var kota =['jakarta','bandung','surabaya',',makassar']
  console.log(kota);

  var result = kota.join(" ")
  return result
}

console.log(panggilJoin());
