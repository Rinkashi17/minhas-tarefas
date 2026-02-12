import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'>

type Props = {
  $ativo: boolean
}

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 9px;
  /* Troque props.ativo por props.$ativo */
  border: 1px solid
    ${(props) => (props.$ativo ? variaveis.azulClaro : '#a1a1a1')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.$ativo ? variaveis.azulClaro : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
