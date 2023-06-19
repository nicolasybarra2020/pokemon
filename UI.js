import { batalla } from "./data.js"

export class UI{
    
    
    ronda=1
    team1div=document.getElementById('team1')
    team2div=document.getElementById('team2')
    
    mostrarPokemones(team1,team2){

        //Asignacion de variables y constantes
        let elegido1=null
        let elegido2=null
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

                div.addEventListener('click',function(e){
                if(turno===1){

                        const target=e.target
                        target.style.background='red'
                        elegido1=team1[i]
                        console.log(elegido1)
                        turno=(!(this.ronda%2==0))?2:0
                    }
                })
                
                div2.addEventListener('click',function(e){
                if(turno===2){

                        const target=e.target
                        target.style.background='red'
                        elegido2=team2[i]
                        console.log(elegido2)
                        turno=(this.ronda%2==0)?1:0

                        
                    }
                    
                })

        }
        document.getElementById('space').addEventListener('click',function(){

            if ((!(elegido1===null)) && (!(elegido2===null))){
                this.ronda++
                return [elegido1.name,elegido2.name]
                
            }

        })
        
    }
    
}