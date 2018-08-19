/*function Punto(x, y){
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
}*/
const Punto ={
  init : function(x,y){
    this.x=x
    this.y= y
  }
}
const p1 = new Punto(0,4)
const p2 = new Punto(3,0)
