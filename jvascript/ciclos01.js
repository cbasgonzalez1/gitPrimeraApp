let vidaGoku = 100
let vidaSuperman = 100
const minpod = 5
const maxpod = 12
let round = 1
const ambossiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0
let goku1 = vidaGoku/maxpod
let superm1 = vidaSuperman/maxpod
while (ambossiguenVivos()) {
  if (goku1 >= 0) {
    console.log(`goku tiene ${goku1} vida`)
  }else {
    console.log(`superman tiene ${superm1}`)
  }
}
console.log(`${goku1} ${superm1}`)
