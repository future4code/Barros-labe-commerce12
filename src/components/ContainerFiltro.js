import React from "react";

import { FilterContainer, DivFilters, InputFilter} from "../style";

export const ContainerFiltro = (props) => {

    return (
        <FilterContainer>
            <h2>Filtrar por:</h2>
            <DivFilters>
                <InputFilter 
                    placeholder="Preco Minimo"
                    type="number"
                    value={props.precoMin}
                    onChange={ (event) => props.setPrecoMin(event.target.value) }
                />
            </DivFilters>

            <DivFilters>
                <InputFilter
                    placeholder="Preco Máximo"
                    type="number"
                    value={props.precoMax}
                    onChange={ (event) => props.setPrecoMax(event.target.value) }
                />
            </DivFilters>

            <DivFilters>
                
                <InputFilter
                    placeholder="Nome"
                    type="text"
                    value={props.inputName}
                    onChange={ (event) => props.setInputName(event.target.value)}
                />
            </DivFilters>
        </FilterContainer>    
    )
}