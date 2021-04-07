const nilai = 80
let nilaihuruf, ket 
// logika percabangan 

if(nilai>= 85){
    nilaihuruf = 'A'
    ket = 'Sangat Baik'
}else if (nilai>= 75){
    nilaihuruf = 'B'
    ket = 'Baik'
}else if (nilai>65){
    nilaihuruf = 'C'
    ket = 'Cukup'
}else if (nilai>55){
    nilaihuruf = 'D'
    ket = 'Buruk'
}else{
    nilaihuruf = 'E'
    ket = 'Sangat Buruk'
}
console.log('nilai anda'+nilaihuruf +'(' + ket +')')