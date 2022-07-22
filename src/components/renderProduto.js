import React, { useState } from "react";
import {BotaoAdicionar, Layout, ProdutoCamp, CardProduto, TopoProdutos } from "../style";
import BtnImgAdd from '../img/botaoAdd.png'
import MockProdutos from "./mockupProdutos";
import { Filters } from './Filtros'
import Logo from "./Header";

function RenderProduto(){

    const [ ListaProdutos, SetListaProdutos ] = useState(MockProdutos)
    const [ ListaCarrinho, SetListaCarrinho ] = useState([])

    const [ Query, SetQuery ] =useState("")
    const [ Sort, SetSort ] =useState("nomeProduto")   
    
    return(
            <ProdutoCamp>
              <Logo/>
              <TopoProdutos>
                  <label>Quantidade de produtos:{ListaProdutos.length}</label>
                  <Filters
                  Query={Query}
                  SetQuery={SetQuery}
                  Sort={Sort}
                  SetSort={SetSort}
                  />
              </TopoProdutos>
              {ListaProdutos
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
                      <button><BotaoAdicionar BtnAdd={BtnImgAdd}/></button>
                  </CardProduto>
                )
              })}

            </ProdutoCamp>
        
      )
}

export default RenderProduto