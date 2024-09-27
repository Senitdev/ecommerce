import { useState } from "react";

export default function Choix(){
    const[check, setCheck]=useState(false);
    const handleChange=()=>{
        setCheck(!check);
    }
    return<>
    <input type="checkbox" value={!check} onChange={handleChange}></input>
    <button disabled={!check}>Envoyer</button>
    </>
}