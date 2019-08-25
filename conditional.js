

if (1 > 0) {
    console.log('satu lebih dari nol');
}

console.log('apakah sama ?, 1 = 1');

if (1 != 0) {
    console.log('[IF] satu tidak sama dengan 0');
}


if (1 != 1) {
    console.log('[IFelse] satu tidak sama dengan 1');
} else {
    console.log('[IFelse] satu sama dengan 1');
}

if (1 != 1) {
    console.log('[IF:ELSEIF:ELSE] satu tidak sama dengan 1');
} else if (1 > 1) {
    console.log('[IF:ELSEIF:ELSE] tapi 1 lebih dari 1');
} else {
    console.log('[IF:ELSEIF:ELSE] ambil semua bro');
}

if (1 > 0) {
    console.log('ternyata benar');
    if (2 > 1) {
        console.log('2 lebih dari 1');
    }
    console.log('yang 2 > 1 bisa jadi salah bro');
}

var Umur = 18;
if (Umur > 17) {
    console.log("Saya harus mempunyai KTP");
}
console.log(" dan layak  menpunyai SIM");

var angka = 17;
if (angka % 2 == 0) {
    console.log("Angka = " + angka);
    console.log("Angka adalah bilangan genap");
}
else {
    console.log("Angka = " + angka);
    console.log("Angka adalah bilangan ganjil");
}

var h = new Date();
var mingguan = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
console.log("Hari : " + mingguan[h.getDay()]);
var hari = h.getDay();
if (hari == 0 || hari == 6) {
    console.log("Selamat Berlibur");
}
else if (hari == 1) {
    console.log("I Like Monday");
    console.log("Selamat Bekerja");
}
else {
    console.log("Selamat Bekerja");
}
var angka = 7;

if (angka > 5) {
    console.log("angka ini lebih besar dari 5");
    if (angka <= 10) {
        console.log("angka ini lebih besar atau sama dengan 10");
    }
}
