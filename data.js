import { Pokemon } from "./models.js";
import { Fuego } from "./models.js";
import { Agua } from "./models.js";
import { Planta } from "./models.js";
import { UI } from "./UI.js";
import { Batalla } from "./models.js";

const charmander1=new Pokemon(
    'Charmander1',
    'Fuego',
    900,
    [new Fuego('Lanzallamas',70),new Fuego('Embestida',20)]
) 
const Bulbasaur1=new Pokemon(
    'Bulbasaur1',
    'Planta',
    1000,
    [new Planta('Tacleo',25),new Planta('Bombaverde',60)]
)
const Squirtle1=new Pokemon(
    'Squirtle1',
    'Agua',
    950,
    [new Agua('Waterpulse',70),new Agua('Aquatail',50)]
)


const charmander2=new Pokemon(
    'Charmander2',
    'Fuego',
    900,
    [new Fuego('Embestida',20),new Fuego('Frustracion',65)]
) 
const Bulbasaur2=new Pokemon(
    'Bulbasaur2',
    'Planta',
    1000,
    [new Planta('Bombasemilla',55),new Planta('Tacelo',25)]
)
const Squirtle2=new Pokemon(
    'Squirtle2',
    'Agua',
    950,
    [new Agua('Aquajet',45),new Agua('Waterpulse',70)]
)


export const team1=[Squirtle1,charmander1,Bulbasaur1]
export const team2=[Squirtle2,charmander2,Bulbasaur2]

export const ui=new UI()
export const batalla= new Batalla(team1,team2)

//Skills de tipo agua

//  Aquajet extends Agua{
//     power=45
// }
//  Waterpulse extends Agua{
//     power=70
// }
//  Aquatail extends Agua{
//     power=50



// //Skills de tipo fuego

//  Lanzallamas extends Fuego{
//     power=70
// }
//  Embestida extends Fuego{
//     power=20
// }
//  Frustracion extends Fuego{
//     power=40


// //Skills de tipo planta

//  Bombasemilla extends Planta{
//     power=55
// }
//  Tacleo extends Planta{
//     power=25
// }
//  Bombaverde extends Planta{
//     power=60
// }