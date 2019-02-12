function panggilNestedArray(value) {
  for (var i = 0; i < value.length; i++) {
    console.log("id : "+value[i][0]);
    console.log("name : "+value[i][1]);
    console.log("company : "+value[i][2]);
    console.log();
  }
}

var nestedArray = [
  [1, "mark zuckerberg", "facebook"],
  [2, "Elon Musk", "Tesla"],
  [3, "bill gates", "microsoft"],
  [4, "steve jobs", "apple"],
]

panggilNestedArray(nestedArray);
