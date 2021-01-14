import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  position: relative;
  margin: 0 0 2.5rem 0;
`

const Select = styled.select`
  width: 100%;
  font-size: .85rem;
  padding: .65rem;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 3px solid transparent;
  box-shadow: 0 0 0 3px transparent;
  /* -webkit-appearance: none; // para desabilitar a seta patrão */

  &:focus {
    border: 3px solid #65A1A0;
    box-shadow: 0 0 0 3px #B9DEDF;
  }

  &:hover {
    border: 3px solid #65A1A0; 
  }
`

// Esse seria um select padrão sem nenhuma costumização
// É possivel fazer um totalmente custom

const InputSelect = ({ id, value, onChange }) => {
  return (
    <InputContainer>
      <Select id={id} value={value} onChange={onChange}>
        <option value="">Selecione uma habilidade</option>
        <option value="frontend">Front-end</option>
        <option value="backend">Back-end</option>
        <option value="mobile">Mobile</option>
      </Select>

    </InputContainer>
  )
}

export default InputSelect
