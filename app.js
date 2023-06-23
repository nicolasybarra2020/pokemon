import { team1,team2 } from './data.js'
// import { UI } from './UI.js'
// import { Batalla } from './models.js'
import { batalla } from './data.js'
import {ui} from './data.js'



const render=()=>{
    const spaceButton=document.getElementById('space')
    ui.mostrarPokemones(team1,team2)
    ui.mostrarAtaques(team1,team2)
    // ui.elegirAtaque(team1,team2)
    


    const handleClick=()=>{
        console.log(`Ronda ${ui.ronda}`)
        ui.botonLuchar()
        spaceButton.removeEventListener('click',handleClick)
        render()
    }


    spaceButton.addEventListener('click',handleClick)

}

render()

    




 
    

