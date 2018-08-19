function Punto(x, y){
  this.x= x
  this.y = y
}
Punto.prototype.moverEnX = function (x){
this.x+= x
}
Punto.prototype.moverEnY = function (y){
this.y+= y
}
Punto.prototype.distancia= function distancia(p){
  const x = this.x -p.x
  const y = this.y -p.y
  return Math.sqrt(x*x+y*y)
}
const p1 = new Punto(0,4)
const p2 = new Punto(3,0)

}
console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))
//Punto{x:10, y:4}
p1._proto_.moverEnX= function(){alert('hola')}
function () { alert ('hola!')}
p2.moverEnX(200)
let persona =  { nombre : 'Sebastian'}
persona._proto_
