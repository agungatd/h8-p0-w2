// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var num = 2;
while (num<22) {
  console.log(num+' - I love coding');
  num += 2;
}
console.log('LOOPING KEDUA');
var num2 = 20
while (num2>1) {
  console.log(num2+' - I will become fullstack developer');
  num2 -= 2;
}
console.log('====== Looping FOR ======')
// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var num3=1; num3<21; num3++) {
  console.log(num3+' - I love coding');
}
console.log('LOOPING KEDUA');
for (var num4=20; num4>0; num4--) {
  console.log(num4+' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
console.log('====== contoh - ganjil genap ======')
for (var no=1; no<101; no++) {
  if (no % 2 == 0) {
    console.log('GENAP');    
  } else {
  console.log('GANJIL');
  }
}
console.log('====== contoh - untuk pertambahan counter 2 ======')
for (var nom=1; nom<101; nom+=2) {
  if (nom % 3 == 0) {
    console.log(nom+' KELIPATAN 3');    
  } else {
  console.log('');
  }
}
console.log('====== contoh - untuk pertambahan counter 5 ======')
for (var nomo=1; nomo<101; nomo+=5) {
  if (nomo % 6 == 0) {
    console.log(nomo+' KELIPATAN 6');    
  } else {
  console.log('');
  }
}
console.log('====== contoh - untuk pertambahan counter 9 ======')
for (var nomor=1; nomor<101; nomor+=9) {
  if (nomor % 10 == 0) {
    console.log(nomor+' KELIPATAN 10');    
  } else {
  console.log('');
  }
}