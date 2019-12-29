import styled from 'styled-components'

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