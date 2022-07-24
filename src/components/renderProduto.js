import React, { useState } from "react";
import { MainContainer, Topo,BotaoAdicionar, Layout, ProdutoCamp, CardProduto, TopoProdutos, CartContainer } from "../style";
import BtnImgAdd from '../img/botaoAdd.png'
import MockProdutos from "./mockupProdutos";
import { Filters } from './Filtros';
import Logo from "./Header";
import {ContainerFiltro } from '../components/ContainerFiltro'

function RenderProduto(){

    const [ ListaProdutos ] = useState(MockProdutos)
    const [ ListaCarrinho, SetListaCarrinho ] = useState([])

    const [ Query, SetQuery ] =useState("")
    const [ Sort, SetSort ] =useState("nomeProduto")  
    
    
    // Abaixo parte da filtragem por nome e preço ////
    const [precoMin, setPrecoMin] = useState(-Infinity)

    const [precoMax, setPrecoMax] = useState(Infinity)

    const [inputName, setInputName] = useState("")

    // Abaixo a parte responsavel por renderizar as coisas no carrinho
    const [valortotal, setValorTotal] = useState(0)

    const ComprarProduto = (produto) => {
      const newProdutosCarrinho = [
        ...ListaCarrinho, 
        {
         id:Math.random(9999),
         nomeProduto: produto.nomeProduto,
         valorProduto:produto.valorProduto,
        }
      ]

      SetListaCarrinho(newProdutosCarrinho)

      const novoValor = valortotal + produto.valorProduto
      setValorTotal(novoValor)
    }

    // remove um item do carrinho
    const RemoverProduto = (produtoId) => {
      const newProdutosCarrinho = ListaCarrinho.filter( (produto) => produto.id !== produtoId.id)

      SetListaCarrinho(newProdutosCarrinho)
      const novoValor = valortotal - produtoId.valorProduto
      setValorTotal(novoValor)
    }

    ////----------------///----------------------------/////

    const renderizarProdutos = ListaProdutos
      .filter( (produto) =>  produto.valorProduto >= precoMin || precoMin === "")
      .filter( (produto) => produto.valorProduto <= precoMax || precoMax === "" )
      .filter ( (produto) => produto.nomeProduto.includes(inputName) ) 
      .sort((a, b)=>{
          switch(Sort){
            case "Decrescente":
              return b.nomeProduto.localeCompare(a.nomeProduto)
            default:
              return a.nomeProduto.localeCompare(b.nomeProduto)
      }
      }) 
      .map((produto, index)=>{
        return(
          <CardProduto key={index}>
              <img src={produto.imagem}/>
              <label>{produto.nomeProduto}</label>
              <p>{parseFloat(produto.valorProduto).toFixed(2)}R$</p>
              <button onClick={ () => ComprarProduto(produto)}>
                <BotaoAdicionar BtnAdd={BtnImgAdd}/>
              </button>
          </CardProduto>
        )
      });

      return(
          <Layout>
            <Topo>
              <Logo/>
            </Topo>
            <MainContainer>
              <ContainerFiltro
                precoMin={precoMin}
                setPrecoMin={setPrecoMin}

                precoMax={precoMax}
                setPrecoMax={setPrecoMax}

                inputName={inputName}
                setInputName={setInputName}
              />
              <ProdutoCamp>
          
                <TopoProdutos>
                <label>Quantidade de produtos: {renderizarProdutos.length}</label>
                <Filters
                  Query={Query}
                  SetQuery={SetQuery}
                  Sort={Sort}
                  SetSort={SetSort}
                />
                </TopoProdutos>
                {renderizarProdutos}
              </ProdutoCamp>
              <CartContainer>
                <h2>Carrinho</h2>
                {ListaCarrinho.map( (produto,index) => {
                  return (
                    <div className="listaCarrinho" key={index}>
                      <div className="nomeProduto"> <p> {produto.nomeProduto} </p> </div>
                      <div className="remover">
                        <button
                        onClick={() => RemoverProduto(produto) }>
                           X 
                        </button>
                      </div>
                    </div>
                  )
                })}
                <h3>Valor total: {valortotal}</h3>
              </CartContainer>
            </MainContainer>
          </Layout>  
      )
}

export default RenderProduto