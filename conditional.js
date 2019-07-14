

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
828