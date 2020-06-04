import React from 'react'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'

const MobileToggle = styled.button`
  z-index: 1001;
  background: 0 0;
  border: none;
  outline: 0 !important;
  padding: 10px;
  display: block;
  position: fixed;
  top: 18px;
  right: 18px;
  i{
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    &:before, &:after{
      content: "";
      background-color: white;
      display: block;
      width: 100%;
      height: 3px;
      position: absolute;
      top: 4px;
      left: 0;
      right: 0;
      transition: all .3s ease-out;
    }
    &:before{
      transform: ${({menuOpened}) => menuOpened ? null : 'translateY(6px) rotate(225deg)'};
    }
    &:after{
      top: auto;
      left: 0;
      right: 0;
      bottom: 4px;
      transform: ${({menuOpened}) => menuOpened ? null : 'translateY(-6px) rotate(-225deg)'};
      transition: all .33s ease-in;
    }
  }
  @media ${device.tablet}{
    display: none;
  }
`

const ToggleMenu = ({menuOpened, setMenuOpened}) => <MobileToggle menuOpened={menuOpened} onClick={() => setMenuOpened(!menuOpened)}><i /></MobileToggle>


export default ToggleMenu