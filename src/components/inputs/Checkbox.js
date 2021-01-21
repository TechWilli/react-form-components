import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  position: relative;
  margin: 0 0 2.5rem 0;
`

const Label = styled.label`
  font-size: .85rem;
`

const InputCheckbox = styled.input`
  margin-right: .5rem;
  width: 1rem;
  height: 1rem;
  position: relative;
  top: 3px;
  background-color: 'red';
`

// Para criar multi checkbox é necessário, explicação na aual de checkbox do módulo 04 Formulários
const Checkbox = ({ id, checked, onChange }) => {
  return (
    <InputContainer>
      <InputCheckbox
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={id}>Aceitar termos</Label>
      <span style={{ fontSize: '.85rem' }}> - {checked ? 'OK' : 'Pendente'}</span>
    </InputContainer>
  )
}

export default Checkbox
