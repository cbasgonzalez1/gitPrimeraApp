const nombre= 'Sebastian'
const dias = [
  'lunes','martes','miercoles',
  'jueves','viernes','sabado','domingo'
]
function correr(){
  const min = 5
  const max = 10
  return Math.round(Math.random() * (max - min)) + min
}
let totalkm = 0
const length = dias.length
for (let i = 0; i < length; i++) {
  const kms = correr()
  totalkm += kms
  console.log(`El dia ${dias[i]}
    ${nombre} corrio ${kms} kms`)
}
const promediokm = totalkm / length
console.log(`En promedio, ${nombre} corrio ${promediokm.toFixed(2)} kms`)
