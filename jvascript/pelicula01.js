const pelicula = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13
const nameSebas = 'Sebastian'
const ageSebas = 23
const nameEsteban = 'Esteban'
const ageEsteban = 12
function canWatchStarwars7(name,age){
if(age >= pgStarWars7){
alert(`${name} puede pasar a ver ${pelicula}`)
}else{
alert(`${name} no puede pasar a ver ${pelicula}.
Tiene ${age} años y necesita tener ${pgStarWars7}`)
}
}
canWatchStarwars7(nameSebas,ageSebas)
canWatchStarwars7(nameEsteban,ageEsteban)
