import React from "react";

import { FilterContainer, DivFilters, InputFilter} from "../style";

export const ContainerFiltro = (props) => {

    return (
        <FilterContainer>
            <DivFilters>
                <label>Preço mínimo</label>
                <InputFilter 
                    type="number"
                    value={props.precoMin}
                    onChange={ (event) => props.setPrecoMin(event.target.value) }
                />
            </DivFilters>

            <DivFilters>
                <label>Preço máximo</label>
                <InputFilter
                    type="number"
                    value={props.precoMax}
                    onChange={ (event) => props.setPrecoMax(event.target.value) }
                />
            </DivFilters>

            <DivFilters>
                <label>Nome</label>
                <InputFilter
                    type="text"
                    value={props.inputName}
                    onChange={ (event) => props.setInputName(event.target.value)}
                />
            </DivFilters>
        </FilterContainer>    
    )
}