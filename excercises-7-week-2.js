// 1. Menyusun Barisan Bintang
var rows1=5; // input the number of rows
var str = '*';

for (line=0; line<rows1; line++) {
    console.log(str);
  }
console.log('============================================');
// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 =5;

for(var i=0; i<rows2; i++) {
  var str = '*';
  for(var j=1; j<rows2; j++) {
    str = str+'*';
  }
  console.log(str);
}

console.log('============================================');
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5; // input the number of rows

for(var x=1; x <=rows3; x++) {
  var str = '*';
  for (var y=1; y < x; y++) {
    var str=str+'*';        
      }
 console.log(str);
}