//input tanggal antara 1-31
var tanggal = 31;
//input bulan antara 1-12
var bulan = 12;
//input tanggal antara 1900-2200
var tahun = 1900;


  switch (bulan){
    case 1:
      bulan='Januari';
      break;
    case 2:
      bulan='Februari';
      break;
    case 3:
      bulan='Maret';
      break;
    case 4:
      bulan='April';
      break;
    case 5:
      bulan='Mei';
      break;
    case 6:
      bulan='Juni';
      break;
    case 7:
      bulan='Juli';
      break;
    case 8:
      bulan='Agustus';
      break;
    case 9:
      bulan='September';
      break;
    case 10:
      bulan='Oktober';
      break;
    case 11:
      bulan='November';
      break;
    case 12:
      bulan='Desember';
      break;
    default:
      tanggal='';
      bulan='';
      tahun='';
      break;
  } 

if (tanggal<1 ||tanggal>31) {
    console.log('masukan tanggal hanya 1-31 & bulan 1-12 & tahun 1900-2200');
} else if (tahun<1900 ||tahun>2200) {
    console.log('masukan tanggal hanya 1-31 & bulan 1-12 & tahun 1900-2200');
} else {
    console.log (tanggal+' '+bulan+' '+tahun);
}