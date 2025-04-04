
var media1 = 9
var media2 = 7
var media3 = 4
var mediafinal = ((media1 + media2 + media3) / 3).toFixed(1)

console.log("Nota 1:", media1)
console.log("Nota 2:", media2)
console.log("Nota 3:", media3)
console.log("Média:", mediafinal)


if (mediafinal >= 7) {
    console.log("✅ APROVADO!")
} else if (mediafinal < 7){
    console.log("❌ REPROVADO!")
}

const notas = [media1, media2, media3];

let maiorNota = notas[0];
let menorNota = notas[2];

for (var i = 1; i < notas.length; i++) {
  if (notas[i] > maiorNota) {
    maiorNota = notas[i]
  }
}
for (var i = 1; i < notas.length; i++) {
    if (notas[i] < menorNota) {
        menorNota = notas[i]
    }
}

console.log("A maior nota é a: ", maiorNota.toFixed(1))
console.log("A menor nota é a: ", menorNota.toFixed(1))