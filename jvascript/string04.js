function platzom(str){
  let translation = str
  //si la palabra original es un palindromo,
  //nignuna regla anterior cuenta y devuelve
  //la misma palabra intercalando mayusculas y minusculas
  //split separa el string
  //join une el string separado
 const reverse = (str) => str.split('').reverse().join('')
 function minMay(str){
   const lengh = str.lengh
   let translation =''
   let capitalize = true
   for (let i = 0; i < length; i++) {
     const char = str.charAt(i)
     translation += capitalize ?
     char.toUpperCase() : char.toLowerCase()
     capitalize =! capitalize
   }
   return translation
 }
  if (str== reverse(str)) {
 return minMay(str)
  }
  //si la palabra termina en "ar", se le quitan esos dos caracteres
  //endsWith finaliza con
  if (str.toLowerCase().endsWith('ar')) {
    //slice corta
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
//.slice(0) partir desde donde hasta  Math.round(lengh/2) la mitad
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
console.log(platzom("sometemos"))//SoMeTeMoS
