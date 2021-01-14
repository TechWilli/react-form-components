import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  position: relative;
  margin: 0 0 2.5rem 0;
`

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  /* margin-right: 1rem; */
  font-size: .85rem;
`

const Radio = styled.input`
  margin-right: .55rem;
`

const InputRadio = ({ id, value, onChange }) => {
  return (
    <InputContainer>
      <RadioWrapper>
        <Label>
          <Radio type="radio" id={id} name="especializacao" onChange={onChange} value="frontend" /* checked={ } */ />
        Front-end
        </Label>
        <Label>
          <Radio type="radio" id={id} name="especializacao" onChange={onChange} value="backend" /* checked={ } */ />
        Back-end
        </Label>
        <Label>
          <Radio type="radio" id={id} name="especializacao" onChange={onChange} value="mobile" /* checked={ } */ />
        Mobile
        </Label>
      </RadioWrapper>

      <p style={{ fontSize: '.85rem', marginTop: '1.5rem' }}>
        Radio selecionado: {value}
      </p>
    </InputContainer>
  )
}

export default InputRadio
