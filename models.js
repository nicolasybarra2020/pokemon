//Pokemon
import { ui } from "./data.js"
export class Pokemon{
    constructor(name,type,hp,skills){
        this.name=name
        this.type=type
        this.hp=hp
        this.skills=skills
        this.skillElegida=this.skills[0].skillname
        
    }

    atacar(pokemonAtacado){
        if(pokemonAtacado.isAlive()){
        console.log(`${this.name} atacó a ${pokemonAtacado.name} con ${this.skillElegida}`)
        let skill=this.skills.filter((instancia)=> instancia.skillname===this.skillElegida)[0]
        let power=skill.calcularPoder(pokemonAtacado.type,skill.power)
        let hpRestante=pokemonAtacado.reduceHP(power)
        let hpDisponible=(hpRestante>0)? hpRestante:0
        console.log(`${pokemonAtacado.name} ahora tiene ${hpDisponible} de vida`)
        }else{
            console.log(`${pokemonAtacado.name} ya fue derrotado`)
            ui.ronda--
        }
    }
    isAlive(){
        if(this.hp>0){
            return true
        }else{return false}
    }
    reduceHP(power){
        this.hp=this.hp-power
        return this.hp
    }
}





//Clase Batalla:código para que se dé la lucha entre pokemones 
export class Batalla{
    constructor(team1,team2){
        this.team1=team1
        this.team2=team2
    }
    lucha(atacante,atacado){
        atacante.atacar(atacado)
        
        // let poderRealAtacante=
        
        


    }
    atacarHastaDerrotar(){
        
    }
}


class Elemento{
    verificarElemento(enemyType,myPower,weakAgainst,strongAgainst){
        let power;
        if(enemyType===weakAgainst){
            power= myPower - 20
            console.log('Ataque débil contra',enemyType)
        }else if(enemyType===strongAgainst){
            power=myPower + 20
            console.log('Ataque fuerte contra',enemyType)
        }else{
            power=myPower
            console.log('Ataque normal contra',enemyType)
        }
        return power
    }
}

export class Agua extends Elemento{
    constructor(skillname,power){
        super()
        this.skillname=skillname
        this.power=power
    }
    strongAgainst='Fuego'
    weakAgainst='Planta'
    calcularPoder(enemyType,myPower){
        return super.verificarElemento(enemyType,myPower,this.weakAgainst,this.strongAgainst)
    }
}
export class Fuego extends Elemento{
    constructor(skillname,power){
        super()
        this.skillname=skillname
        this.power=power
    }
    strongAgainst='Planta'
    weakAgainst='Agua'
    calcularPoder(enemyType,myPower){
        return super.verificarElemento(enemyType,myPower,this.weakAgainst,this.strongAgainst)
    }
}
export class Planta extends Elemento{
    constructor(skillname,power){
        super()
        this.skillname=skillname
        this.power=power
    }
    strongAgainst='Agua'
    weakAgainst='Fuego'
    calcularPoder(enemyType,myPower){
        return super.verificarElemento(enemyType,myPower,this.weakAgainst,this.strongAgainst)
    }
}


