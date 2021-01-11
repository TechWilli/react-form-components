import React, { useState } from 'react'
import './App.css'
import Input from './components/inputs/Input'

const App = () => {

  const [value, setValue] = useState('')

  const onChange = ({ target }) => {
    setValue(target.value)
  }

  return (
    <div className="App">
      <Input
        id={'nome'}
        type={'text'}
        label={'Nome'}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default App
