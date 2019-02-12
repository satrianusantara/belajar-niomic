function panggilFilter() {
  var arr = [
    {negara: 'Indonesia', benua: 'asia'},
    {negara: 'jerman', benua: 'eropa'},
    {negara: 'spanyol', benua: 'eropa'},
    {negara: 'portugal', benua: 'eropa'},
  ];

  var benuaEropa = arr.filter(function(item){
    return item.benua === 'eropa';
  });
  return benuaEropa;

}

console.log(panggilFilter());
