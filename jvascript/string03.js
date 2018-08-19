function platzom(str){
  let translation = str
  //si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0,-2)
 }
 //si la palabra inicia con z, se le aniade la "pe" al final
 if (str.toLowerCase().startsWith('z')) {
   translation += 'pe'
 }
 //si la palabra traducida tiene 10 o mas letras, se debe
 //partir en la mitad y unir con un guion medio
 const length = translation.length
 if (length >= 10) {
   const prim = translation.slice(0,Math.round(length / 2))
    const seg = translation.slice(Math.round(length / 2))
    translation = `${prim} - ${seg}`
 }
return translation
 }
console.log(platzom("Programar"))//Program
console.log(platzom("Zorro"))//Zorrope
console.log(platzom("Zarpar"))//Zarppe
console.log(platzom("abecedario"))//abece-dario
