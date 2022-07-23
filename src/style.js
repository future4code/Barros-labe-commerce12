
import styled,  { keyframes } from "styled-components";

const Tittle = keyframes`
    0%{ color: white }
    50%{ color: black }
    100%{ color: white  }
`
export const LogoContainer = styled.div`
    width: 100%;
    height: 10vh;
    background: rgba(74, 77, 75, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: white;
        animation: ${Tittle} 20s linear infinite;
    }
    button{
        background: none;
        border: none;
        position: absolute;
        right: 30px;
        :hover{
            transform: scale(1.3);
            transition: .3s;
            cursor: pointer;
        }
    }
`
/// --- toda configuracao abaixo é do component ContainerFiltro -- ////////
export const FilterContainer = styled.div`
    width: 20vw;
    background: #dee3e0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DivFilters = styled.div `
    display: flex;
    flex-direction: column;
    font-size: 17px;
    font-weight: bold;
    margin-top: 50px;
    label {
        margin-bottom: 5px;
    }
`
export const InputFilter = styled.input `
    padding: 2px;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    border: none;
    background: none;
    outline: 0;
    :hover{
        border-bottom: 2px solid black;
    }

    :focus{
        font-size: 18px;
        border-bottom: 3px solid black;
    }
`


///-------------------//////////////---------------------//////////////
export const CartContainer = styled.div`
    width: 20vw;
    height: 90vh;
    background: #dee3e0 ;
` 

export const Topo = styled.div`
    width: 100vw;
    height: 10vh;
`

export const MainContainer = styled.div`
    width: 100vw;
    height: 90vh;
    background: #fff;
    display: flex;
`

export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ProdutoCamp = styled.div`
    width: 60vw;
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
    border: 2px solid black;
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

export const BotaoCart = styled.div`
    background-image: url(${(props)=>props.BtnCart});
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: cover;
`

export const TopoProdutos = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label{
        margin-left: 20px;
    }
    select{
        margin-right: 20px;
        border: none;
    }
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