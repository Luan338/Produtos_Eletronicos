import React, { Component } from "react";
import acer from "./Assets/acer.jpg";
import lenovo from "./Assets/lenovo.jpg";
import samsung from "./Assets/samsung.jpg";
import "./App.css";

export default class App extends Component {

  state = {
    produtos: [
      {
        id: 1,
        produto: "Notebook Gamer - Acer",
        preco: 3500,
        descricao: "Notebook Gamer, 1TB, SSD 240, i3",
        imgProduto: acer
      },
      {
        id: 2,
        produto: "Notebook Lenovo",
        preco: 4200,
        descricao: "Notebook Lenovo, 1TB, SSD 320, Ryzen 5",
        imgProduto: lenovo
      },
      {
        id: 3,
        produto: "Notebook Samsung",
        preco: 2500,
        descricao: "Notebook Samsung, SSD 240, Ryzen 3",
        imgProduto: samsung
      },
    ]
  }

  totalProdutos = () => {
    return this.state.produtos.length
  }

  titulo = () => {
    return <h1>Produtos Eletrônicos</h1>
  }

  render() {
    return (
      <>
        <div className="container">
          {this.titulo()}
          <h4>Total Produtos {this.totalProdutos()}</h4>
        </div>
        <div className="container">
          {this.state.produtos.map((item) => (
            <nav className="card" key={item.id}>
              <img src={item.imgProduto} />
              <ul>
                <li className="item_produto">{item.produto}</li>
                <li className="item_preco">R$ {item.preco}</li>
                <li className="item_descricao">{item.descricao}</li>
              </ul>
              <button className="btn">Comprar</button>
            </nav>
          ))}
        </div>
      </>
    )
  }
}