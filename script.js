let firstname = "kayak"
let lastname = "Echamlali"
let age = 17
let fullname = firstname + ' ' +  lastname
let estMajeur = 0
const GENDER = 1

firstname.length

prenom = "Barbara"

/* CONDITION
*  IF : SI
*  ( ?? ) : CONDITION
*  {  } : INSTRUCTION
*  ELSE : SINON
*/

// Afficher un message si je suis majeur sinon un autre message

estMajeur = estMajeurFunction(age)

if(!estMajeur){
    age = 29
}

estMajeur = estMajeurFunction(age)

/* LOOP
*  FOR / WHILE : Itération est connu / IT est inconnu
*  ( Instanciation d'un indice ) : i
*  ( Condition )
*  ( Incrémentation / décrementation )
*  { ( Incrémentation / décrementation ) } : INSTRUCTION
*/

for(let i = firstname.length; i >= 0; i--){
    console.log(firstname[i]  + " Indice : " + i + " ")
}

function estMajeurFunction(age){
    let estMajeur = 0
    
    if(age >= 18){
        estMajeur = 1
        console.log(fullname + " est majeur car il à " + age + " ans.")
        return estMajeur
    }else{
        console.log(fullname + " n'est pas majeur car il n'as pas " + age + " ans.")
        return estMajeur
    }
}