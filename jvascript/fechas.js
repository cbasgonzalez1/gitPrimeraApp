// 02 de mayo de 1995
//02 05 1995
const nacimiento = new Date(1995, 4, 02)
const hoy = new Date()
const tiempo =  hoy - nacimiento
const tiempoS = tiempo/1000
const tiempoM = tiempoS/60
const tiempoH = tiempoM/60
const proximo = new Date(hoy.getFullYear(),nacimiento.getMonth(),nacimiento.getDate())
const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
console.log(dias[proximo.getDay()])
