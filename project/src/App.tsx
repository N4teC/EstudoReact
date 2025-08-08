import './App.css'
import { useState } from 'react'

function App() {

  // let numero = 0
  const [numero, setNumero] = useState<number>(0)


  function handleClick() {
    alert('Bem-vindo ao curso de React!')

  }

  function acrescimo() {
    //numero = numero + 1
    setNumero(numero + 1)
  }

  function decrescimo() {
    setNumero(numero - 1)
  }

  return (
    <>
      
      <h2>Olá mundo!</h2>
      <button onClick={handleClick}>Clique-me</button>
      <hr></hr>
      <button onClick={acrescimo}>+</button>
      <p>{numero}</p>
      <button onClick={decrescimo}>-</button>
    </>
  )
}

export default App
