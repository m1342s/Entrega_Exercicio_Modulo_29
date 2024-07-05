import { FormEvent, useState } from 'react'

import styled from 'styled-components'

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  input {
    padding: 0 16px;
    outline-color: var(--cor-principal);
  }
  button {
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-principal);
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--cor-secundaria);
    margin-left: 8px;
    cursor: pointer;
  }
`

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario>
      <input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button type="submit">Pesquisar</button>
    </Formulario>
  )
}
export default FormVagas
