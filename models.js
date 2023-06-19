
//Pokemon
export class Pokemon{
    constructor(name,type,hp,skills){
        this.name=name
        this.type=type
        this.hp=hp
        this.skills=skills
        
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
    lucha(arrayAtacanteAtacado){
        console.log(arrayAtacanteAtacado)
        


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



