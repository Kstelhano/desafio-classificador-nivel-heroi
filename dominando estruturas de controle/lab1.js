// =========================
// MINHA SOLUÇÃO:
// =========================

let superHeroi = "Maximus" 
let XP = 5500

if(XP<=1000){
    console.log("Heroi Maximus está no nível Ferro")
}else if(XP>=1001 && XP<=2000){
    console.log("Heroi Maximus está no nível Bronze")
}else if(XP>=2001 && XP<=5000){
    console.log("Heroi Maximus está no nível Prata")
}else if(XP>=5001 && XP<=7000){
    console.log(`Heroi ${superHeroi} está no nível Ouro`)
}else if(XP>=7001 && XP<=8000){
    console.log("Heroi Maximus está no nível Platina")
}else if(XP>=8001 && XP<=9000){
    console.log("Heroi Maximus está no nível Ascendente")
}else if(XP>=9001 && XP<=10000){
    console.log("Heroi Maximus está no nível Imortal")
}else{
    console.log("Heroi Maximus está no nível Radiante")
}

// DICA:
// Com aspas (Errado): O JavaScript lê tudo como um texto comum. 
// console.log("Heroi ${superHeroi}...") → Exibe: Heroi ${superHeroi}...
// Com crases (Correto): O JavaScript identifica o símbolo ${ } como um espaço para "injetar" um valor.
// console.log(Heroi ${superHeroi}...) → Exibe: Heroi Maximus...

// =========================
// DESAFIO OTIMIZADO COM IA:
// =========================

let heroiSuper = "MaximusRemedius";
let XPX = 5500;
let nivel = "";

if (XPX <= 1000) {
    nivel = "Ferro";
} else if (XPX <= 2000) {
    nivel = "Bronze";
} else if (XPX <= 5000) {
    nivel = "Prata";
} else if (XPX <= 7000) {
    nivel = "Ouro";
} else if (XPX <= 8000) {
    nivel = "Platina";
} else if (XPX <= 9000) {
    nivel = "Ascendente";
} else if (XPX <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${heroiSuper} está no nível de ${nivel}`);