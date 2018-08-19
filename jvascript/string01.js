function platzom(str){
  let translation = str
  //si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0,-2)
 }
return translation
 }
console.log(platzom("Programar"))//Program
