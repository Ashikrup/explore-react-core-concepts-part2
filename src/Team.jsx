import { useState } from "react"

export default function Team(){
    const [team, SetTeam] = useState(11);
    const handleAdd = () =>{
        const newTeam = team + 1;
        SetTeam(newTeam)
    }
    const  removeAdd = () =>{
        const newTeam = team - 1;
        SetTeam(newTeam)
    }

    const teamStyle  = {
        border: '2px solid gold',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={removeAdd}>Remove</button>
        </div>
    )
}