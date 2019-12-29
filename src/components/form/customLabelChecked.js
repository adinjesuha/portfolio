import styled from 'styled-components'

export const CustomLabelChecked = styled.label`
  background-color: ${props => props.isChecked ? 'var(--brand)' : 'transparent'};
  color: ${props => props.isChecked ? '#fff' : 'var(--brand)'};
  cursor: pointer;
  font-size: ${props => props.checked ? '3.6rem' : '1.6rem'} !important;
  display: block;
  border-radius: 0.4rem;
  border: 1px solid var(--brand);
  padding: 1rem 1.6rem;
  transition: transform .15s cubic-bezier(0,.89,.44,1), background .15s cubic-bezier(.165,.84,.44,1);
`
