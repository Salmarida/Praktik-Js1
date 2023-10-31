function sum( ...numbers ) {
    let hasil = 0; // 1, 3, 6, 10, 15

    for (let i = 0; i < numbers.length; i++) {
        hasil = hasil + i;
    }
    console.log(hasil);
}

sum(1, 2, 3, 4, 5);