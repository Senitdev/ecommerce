import { useReducer, useState } from "react";
const initialeState={count:0}
export default function ExoReducer(){
    const [personne,setPersonne]=useState([
        {
        id:1,
        prenom:"Jean Jack",
        adresse:"Thies"
        }
    ])
    const[state,dispatch]=useReducer(reducer,initialeState);
    function handleIncrement(){
     dispatch({type:"incremente"})
    }
    function handleDecrement(){
     dispatch({type:"decremente"})
    }
    function handleInitalise(){
        dispatch({
                type:"initialise"

        })
    }
    function handleAddPerson(){
     dispatch({
            type:"addPersonne"
     })
    }
    function handleDeletePerson(idpersonne){
     dispatch({
            type:"deletePersonne",
            id:idpersonne,
     })
    }
    let CopiePersonne=[...personne]
    function HandleSubmit(e){
        e.preventDefault();
        let input_prenom=e.target["prenom"].value;
        let input_adresse=e.target["adresse"].value;
        let date=Date.now();
        CopiePersonne.push({id:date,prenom:input_prenom,adresse:input_adresse});
        setPersonne(CopiePersonne);        
    }
    return<>
    <div><Liste listPerson={personne} handleSub={HandleSubmit}/></div>
{/*
    <p>Compteur:{state.count}</p>
    <p><button onClick={handleIncrement}>Incremente</button></p>
    <p><button onClick={handleDecrement}>Décremente</button></p>
    <p><button onClick={handleInitalise}>initalise</button></p>
    <br></br>
    </div>
   */}
    
   
    </>
}
function Liste({listPerson,handleSub}){
    return<>
    <p>Formulaire</p><br/>
    <form onSubmit={handleSub}>
    <p>Prenom:<input type="text"  name="prenom"></input></p>
    <p>Adresse:<input type="text" name="adresse"></input></p>
    <button>Add</button>
    </form>
    <br/>
     <ul style={{padding:"5%"}}>
        {
            listPerson.map((elt)=>(
                <li key={elt.id}>{elt.id} {elt.prenom} {elt.adresse} <button>delete</button></li>
            ))
        }
    </ul>
    </>
}
function reducer(state,action){
    console.log(state,action)
    switch(action.type){
      case "incremente":
          return{
              ...state,count:state.count+1
          }
          case "decremente":
              return {
                  ...state,count:state.count-1
              }
              case "initialise":
                  return{
                      ...state,count:0
                  }
                case "deletePersonne":
                    return {
                     
                    }
                  default:
                      return "Command inconnu"
    }
      }