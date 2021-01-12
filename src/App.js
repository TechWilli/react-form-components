import React, { useState } from 'react'
import './App.css'
import Input from './components/inputs/Input'
import TextArea from './components/inputs/TextArea'

const App = () => {

  const [formValues, setFormValues] = useState({
    nome: '',
    comentario: ''
  })

  const handleChange = ({ target }) => {
    const { id, value } = target
    setFormValues({
      ...formValues,
      [id]: value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('onSubmit fired')
  }

  return (
    <div className="App">
      <div style={{ height: '100%' }}>
        <h1 style={{ margin: '2rem 0 3rem 0', textAlign: 'center' }}>Form Components</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id={'nome'}
            type={'text'}
            label={'Nome'}
            value={formValues.nome}
            onChange={handleChange}
          />

          <TextArea
            id={'comentario'}
            type={'text'}
            label={'Comentário'}
            rows={5}
            value={formValues.comentario}
            onChange={handleChange}
          />
        </form>

        <div style={{ width: '320px' }}>
          <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Outputs</h2>
          <p>Nome: {formValues.nome}</p>
          <br />
          <p>Comentário: {formValues.comentario}</p>
        </div>
      </div>
    </div>
  )
}

export default App
