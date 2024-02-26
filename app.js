function estUnMoisDeTrenteJours(mois){
    if(mois === 4 || mois === 6 || mois === 9 || mois === 11){
        return 1
    }else{
        return 0
    }
}

function estUnMoisDeTrenteEtUnJours(mois){
    if(mois === 1 || mois ===3 || mois===5 || mois===7 || mois===8 || mois===10 || mois===12){
        return 1
    }else{
        return 0
    }
}

function estAnneeBissextile(annee){
    if((annee%4 === 0 && annee%100 !== 0) || annee % 400 ===0){
        return 1
    }else{
        return 0
    }
}

function nombreDeJours(mois, annee){
    const estTrenteEtUn = estUnMoisDeTrenteJours(mois)
    const estTrente = estUnMoisDeTrenteEtUnJours(mois)
    if(estTrenteEtUn === 1){
        return console.log(31)
    }else if(estTrente === 1){
        return console.log(30)
    }else if(estAnneeBissextile(annee) === 1){
        return console.log(29)
    }else{
        return console.log(28)
    }
}

const askMonth = parseInt(prompt('Saisir un mois'))
const askYear = parseInt(prompt('Saisir une année'))

nombreDeJours(askMonth, askYear)