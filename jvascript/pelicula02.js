const pelicula = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13
const nameSebas = 'Sebastian'
let ageSebas = 23
const nameEsteban = 'Esteban'
let ageEsteban = 12
function canWatchStarwars7(name,age,iswithAdult = false){
if(age >= pgStarWars7){
alert(`${name} puede pasar a ver ${pelicula}`)
}else if(iswithAdult){
alert(`${name} puede pasar a ver ${pelicula}.
Aunque su edad es ${age} se encuentra acompañada/o por un Adulto `)
}
else {
alert(`${name} no puede pasar a ver ${pelicula}.
Tiene ${age} años y necesita tener ${pgStarWars7}`)
}
}
canWatchStarwars7(nameSebas,ageSebas)
canWatchStarwars7(nameEsteban,ageEsteban,true)
