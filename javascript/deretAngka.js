function panggilDeretAngka(angka) {
  var hasil = [];
  for (var i = 1; i <= angka; i++) {
    if (i%3 === 0 && i%5 === 0) {
      hasil.push('Niomic');
    }else if (i%5 === 0) {
      hasil.push('Mic');
    }else if (i%3 === 0) {
      hasil.push('Nio');
    }else {
      hasil.push(i);
    }
  }
  hasil = hasil.join(' ');
  return hasil;
}
console.log(panggilDeretAngka(30));
