import React from "react";
import { FiltroContainer } from "../style";

 export function Filters(props){
    return(
        <FiltroContainer>
            <label>Ordenar por:</label>
        <select
        value={props.Sort}
        onChange={(ev)=>{props.SetSort(ev.target.value)}}
        >
            <option >Crescente</option>
            <option >Decrescente</option>
        </select>
    </FiltroContainer>
    )
}
