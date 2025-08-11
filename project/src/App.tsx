import './App.css'
import { useState } from 'react'
import Button from './components/Button'

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

      <Button 
        label="Me clique!" 
        action={handleClick}
      />

      <hr></hr>

      <Button 
        label="-" 
        action={decrescimo}
        className="br-button primary"
      />

      <span className='verde'>{numero}</span>

      <Button 
        label="+" 
        action={acrescimo}
        className="br-button secondary"
      />

    </>
  )
}

export default App
