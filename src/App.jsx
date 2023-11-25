// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";


function App() {
  // const [count, setCount] = useState(0)

  const atualizarCarrinho = () => {
    console.log("Evento PAI ativado")
  } 

  return (
    <>
      <Header atualizarCarrinho={atualizarCarrinho}  />
      <Products atualizarCarrinho={atualizarCarrinho} />
    </>
  );
}

export default App;
