function panggilPerintahMAP() {
  var dataKota = ['jakarta','balikpapan','medan'];
  dataKota.map((item, index, array)=>{
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilPerintahMAP();
