function panggilFilterParameter(value) {
  var arr = [
    {negara: 'Indonesia', benua: 'asia'},
    {negara: 'jerman', benua: 'eropa'},
    {negara: 'spanyol', benua: 'eropa'},
    {negara: 'portugal', benua: 'eropa'},
  ];

  var benuaEropa = arr.filter(function(item){
    return value.benua === 'eropa';
  });
  return benuaEropa;

}

console.log(panggilFilterParameter());
