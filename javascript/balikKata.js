function panggilBalikKata(kata) {
  // var result = kata.split("").reverse().join(''); //memotong pada bagian spasi
  // return result
//menggunakan cara for
  var result = kata.split("");
  var result2 = [];
  for (var i = result.length-1; i >= 0; i--) {
    result2.push(result[i]);
  }
  console.log(result2);
  result2 = result2.join('');
  return result2;
}

console.log(panggilBalikKata("hasan"));
