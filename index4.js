// array

//const listNilai : ['A','B','C']



//console.log(listNilai[2])

const dataMahasiswa = [
{
    nama : 'Jimi Hernando',
    npm : '19421023',
    prodi : 'Informatika'
},
{
    nama : 'Jimi Hernando',
    npm : '19421023',
    prodi : 'Informatika'
}
]

//console.log(dataMahasiswa[0].nama)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + ' - '+ dataMahasiswa[i].npm +'-'+ dataMahasiswa[i].prodi)
}
