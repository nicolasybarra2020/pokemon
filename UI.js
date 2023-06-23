import { batalla } from "./data.js"
import { team1,team2 } from "./data.js"

export class UI{
    
    
    ronda=1
    team1div=document.getElementById('team1')
    team2div=document.getElementById('team2')
    elegido1=null
    elegido2=null
    
    mostrarPokemones(team1,team2){

        //Asignacion de variables y constantes
        this.team1div.innerText=''
        this.team2div.innerText=''
        let turno=0

            //Que equipo empieza segun la ronda

            //Si es par
            if(this.ronda%2==0){
            turno=2
            }else{
            //Si es impar
            turno=1
            }


            //Creacion de pokemones y llamada de eventos click
            for(let i=0;i<team1.length;i++){
                //team1
                const div=document.createElement('div')
                div.className='pokemon'
                div.innerText=team1[i].name
                this.team1div.appendChild(div)
                
                //team2
                const div2=document.createElement('div')
                div2.className='pokemon'
                div2.innerText=team2[i].name
                this.team2div.appendChild(div2)

                div.addEventListener('click',(e)=>{
                if(turno===1){

                        const target=e.target
                        target.style.background='red'
                        this.elegido1=team1[i]
                        console.log(this.elegido1)
                        turno=(!(this.ronda%2==0))?2:0
                        
                    }
                })
                
                div2.addEventListener('click',(e)=>{
                if(turno===2){

                        const target=e.target
                        target.style.background='red'
                        this.elegido2=team2[i]
                        console.log(this.elegido2)
                        turno=(this.ronda%2==0)?1:0
                        
                    }
                    
                })

        }
        
        
    }

    botonLuchar(){
            let atacante,atacado;
            if(this.ronda%2===0){
                [atacante,atacado]=[this.elegido2,this.elegido1]
            }else{
                [atacante,atacado]=[this.elegido1,this.elegido2]             
            }
            batalla.lucha(atacante,atacado)
            this.ronda++
            
            
            
    }

    mostrarAtaques(team1,team2){
        // let clicked=false
        let team1divs=this.team1div.children
        let team2divs=this.team2div.children
        let team=team1
        for(let i=0;i<3;i++){
            let div=team1divs[i]
            if(this.ronda%2===0){
                div=team2divs[i]
                team=team2
            }


            
            div.addEventListener('click',()=>{
                // if(!clicked){
                    // clicked=true
                    div.innerHTML=`
                            <div class='skill'>${team[i].skills[0].skillname}(${team[i].skills[0].power})</div>
                            <div class='skill'>${team[i].skills[1].skillname}(${team[i].skills[1].power})</div>                        
                            `;

                // }
                
            })
        }
    }

    elegirAtaque(team1,team2){
        const team1divs=this.team1div.children
        const team2divs=this.team2div.children
        let team=team1
    
        for(let i=0;i<3;i++){
            let div=team1divs[i]
            if(this.ronda%2===0){
                div=team2divs[i]
                team=team2
            }
            const handleClick=()=>{
              
                const divHijos = div.getElementsByClassName('skill');
                for (let j = 0; j < 2; j++) {
                    const divHijo = divHijos[j];
                    divHijo.addEventListener('click', () => {
                    if (j === 0) {
                        team[i].skillElegida = team[i].skills[0].skillname;
                    } else if (j === 1) {
                        team[i].skillElegida = team[i].skills[1].skillname;
                    }
                    console.log(`Elegiste el ataque ${team [i].skillElegida}!`);
                    });
                }
                div.removeEventListener('click',handleClick)
            }
                    div.addEventListener('click',handleClick)
                

        
        }
        

    }
    
}