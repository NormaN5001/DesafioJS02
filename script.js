let idade = 15
if (idade >= 18){
	console.log("Usuario maior de idade")
}else{
	console.log("Usuario menor de idade")
}
idade = 19
if (idade >= 18){
	console.log("Usuario maior de idade")
}else{
	console.log("Usuario menor de idade")
}


let humano
humano = true
idade = 18

if (idade >= 18 && humano == true){
	console.log("Usuario humano maior de idade")
}else{
	console.log("Usuario nao e um humano maior de idade")
}



let aniversario
aniversario = "janeiro"

if (aniversario == "janeiro"){
	console.log("Usuario faz aniversario em janeiro ou dezembro")
}else{
	console.log("Usuario nao faz aniversario em janeiro ou dezembro")
}

aniversario = "julho"

if (aniversario == "janeiro"){
	console.log("Usuario faz aniversario em janeiro ou dezembro")
}else{
	console.log("Usuario nao faz aniversario em janeiro ou dezembro")
}




let primeiraLetra
primeiraLetra = "N"

if (primeiraLetra == "R"){
	console.log("O seu nome comeca com a letra R")
}else{
	console.log(`O seu nome comeca com a letra"${primeiraLetra}"`)
}



let sobrenome
sobrenome = "R"
if (sobrenome == "R"){
	console.log("O seu sobrenome comeca com a letra R")
}else{
	console.log("O seu sobrenome nao comeca com a letra R")
}



let numLetras
numLetras = 7
sobrenome = "E"

if (numLetras >= 7 || sobrenome == "E"){
	console.log("O seu sobrenome tem mais de 6 letras ou comeca com a letra E")
}else{
	console.log("O seu sobrenome nao tem mais de 6 letras ou nao comeca com a letra E")
}
