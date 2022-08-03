import React from "react";
import { LogoContainer } from "../style";
import { BotaoCart } from "../style";
import CartImg from '../img/cart.png'

function Logo(){
    return (
        <LogoContainer>
            <h1>LabSpace</h1>
            <button><BotaoCart BtnCart={CartImg}/></button>
        </LogoContainer>
    )
}

export default Logo