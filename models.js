//Pokemon
export class Pokemon{
    constructor(name,type,hp,skills){
        this.name=name
        this.type=type
        this.hp=hp
        this.skills=skills
        this.skillElegida=this.skills[0].skillname
        
    }

    atacar(){

    }
    isAlive(){

    }
}





//Clase Batalla:código para que se dé la lucha entre pokemones 
export class Batalla{
    constructor(team1,team2){
        this.team1=team1
        this.team2=team2
    }
    lucha(atacante,atacado){
        let poderAtacante=atacante.skills[0].power
        let poderRealAtacante=
        console.log(`${atacante.name} atacó a ${atacado.name} con ${atacante.skillElegida}`)
        


    }
    atacarHastaDerrotar(){
        
    }
}


class Elemento{
    verificarElemento(){

    }
}

export class Agua extends Elemento{
    constructor(skillname,power){
        super()
        this.skillname=skillname
        this.power=power
    }
    calcularPoder(){}
}
export class Fuego extends Elemento{
    constructor(skillname,power){
        super()
        this.skillname=skillname
        this.power=power
    }
    calcularPoder(){}
}
export class Planta extends Elemento{
    constructor(skillname,power){
        super()
        this.skillname=skillname
        this.power=power
    }
    calcularPoder(){}
}


