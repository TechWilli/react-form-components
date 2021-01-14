import React, { useState } from 'react'
import './App.css'
import Input from './components/inputs/Input'
import InputTextArea from './components/inputs/InputTextArea'
import InputSelect from './components/inputs/InputSelect'
import InputRadio from './components/inputs/InputRadio'

const App = () => {

  const [formValues, setFormValues] = useState({
    nome: '',
    comentario: '',
    habilidade: '',
    especializacao: ''
  })

  const handleChange = ({ target }) => {
    const { id, value } = target

    console.log('value', value)
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

          <InputTextArea
            id={'comentario'}
            type={'text'}
            label={'Comentário'}
            rows={5} // height em rows do input
            value={formValues.comentario}
            onChange={handleChange}
          />

          <InputSelect
            id={'habilidade'}
            value={formValues.techSkill}
            onChange={handleChange}
          />

          <InputRadio
            id={'especializacao'}
            value={formValues.especializacao}
            onChange={handleChange}
          />

        </form>

        {/* <div style={{ width: '320px' }}>
          <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Outputs</h2>
          <p>Nome: {formValues.nome}</p>
          <br />
          <p>Comentário: {formValues.comentario}</p>
        </div> */}
      </div>
    </div>
  )
}

export default App
