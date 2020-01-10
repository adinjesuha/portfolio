import styled from 'styled-components'
import { device } from '../../utils/brakpoints'

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

export const Error = styled.div`
  color: var(--brand);
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? '1' : '0'};
  transform: translateY(${ props  => props.show ? '-10px' : '10px'});
  transition: all 0.1s;
  font-weight: 300;
  font-size: 1.4rem;
  width: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 0;
  form{
    width: 100%;
    max-width: 60rem;
    display: flex;
    flex-direction: column;
  }
  .project-type{
    display: flex;
    flex-direction: column;
    .radio-group{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      > div {
        margin-top: .775rem;
        margin-right: .775rem;
      }
    }
    @media ${device.tablet}{
      flex-direction: row;
      p{
        margin-right: 2rem;
      }
    }
  }
`
