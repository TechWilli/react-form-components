import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  position: relative;
  margin: 1rem;
`

const InputText = styled.input`
  font-size: .85rem;
  width: 20rem;
  padding: .65rem;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 2px solid transparent;
  border: ${props => !props.active ? '2px solid transparent' : '3px solid #65A1A0'};
  box-shadow: ${props => props.active && '0 0 0 3px #B9DEDF'};
  transition: .2s;

  &:focus {
    border: 3px solid #65A1A0;
    box-shadow: 0 0 0 3px #B9DEDF;
  }
`

const Label = styled.label`
  font-size: ${props => !props.active ? .85 : .65}rem;
  color: ${props => !props.active && 'lightgrey'};
  display: block;
  position: absolute;
  left: ${props => !props.active ? 13 : 0}px;
  top: ${props => !props.active ? 13 : -22}px;
  background-color: ${props => !props.active ? 'transparent' : '#B9DEDF'};
  padding: ${props => !props.active ? 0 : 5}px;
  border-radius: ${props => !props.active ? 0 : 5}px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: .2s ease-in;
  
  &:hover {
    cursor: text;
  }
`

const Input = ({ type, id, value, onChange, label }) => {

  const [active, setActive] = useState(false)

  console.log('value', value, !value)

  useEffect(() => {
    if (value) {
      setActive(true)
    } else {
      setActive(false)
    }

  }, [value])

  return (
    <InputContainer>
      <Label htmlFor={id} active={active}>
        {label}
      </Label>
      <InputText
        type={type}
        id={id}
        value={value}
        active={active}
        onChange={onChange}
        onClick={() => setActive(true)}
        onBlur={() => setActive(!value ? false : true)}
      />
    </InputContainer>
  )
}

export default Input
