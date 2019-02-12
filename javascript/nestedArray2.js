function panggilNestedArray(value) {
  for (var i = 0; i < value.length; i++) {
    for (var j = 0; j < value.length; j++) {
      console.log(value[j][i]);
    }
  }
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray);
