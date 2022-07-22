import styled from "styled-components";

export const LogoContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`
/// --- toda configuracao abaixo é do component ContainerFiltro -- ////////
export const FilterContainer = styled.div`
    width: 100%;
    background: yellow;
    display: flex;
`
export const DivFilters = styled.div `
    display: flex;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    margin: 10px 20px;
    label {
        margin-bottom: 5px;
    }
`
export const InputFilter = styled.input `
    padding: 2px;
    font-size: 16px;
    border-radius: 5px;
`


///-------------------//////////////---------------------//////////////
export const CartContainer = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: red;
` 

export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    justify-content: center;
`

export const ProdutoCamp = styled.div`
    width: 60vw;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const CardProduto = styled.div`
    width: 150px;
    height: 28vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
    border-radius: 20px;
    img{
        width: 4vw;
        height: 12vh;
        margin: 10px 0;
    }
    button{
        background: none;
        border: none;
        cursor: pointer;
        position: relative;
        bottom: 5px;
        :hover{
            transform: scale(1.2);
            transition: .3s ease-in;
        }
    }
    label{
        font-weight: bold;
        font-size: 14px;
    }
`

export const BotaoAdicionar = styled.div`
    background-image: url(${(props)=>props.BtnAdd});
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: cover;
`

export const TopoProdutos = styled.div`
    width: 100%;
    height: 50px;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
` 
export const FiltroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    label{
        margin: 0 10px;
        font-weight: bold;
    }    
`