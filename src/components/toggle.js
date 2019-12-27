import React from 'react'
import styled from 'styled-components'

const ToggleBtn = styled.button`
  opacity: 0.75;
  position: relative;
  border-radius: 5px;
  border: 0px none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: opacity 0.3s ease;
  outline: none;
  padding: 0;
  overflow: hidden;
  transform: scale(0.75);
  vertical-align: middle;
  background: transparent none repeat scroll 0% 0%;
  appearance: none;
  &:hover, &focus{
    opacity: 1;
  }
  .circle{
    background: #635e69;
    border-radius: 50%;
    border: 4px solid #635e69;
    height:  24px;
    width: 24px;
    position: relative;
    overflow: visible;
    transform: ${props => props.isDark ? `scale(0.55)` : `scale(1)`};
    transition: all 0.45s ease 0s;
    &:before{
      content: "";
      border-radius: 50%;
      border: ${props => props.isDark ? `2px solid #635e69` : `none`};
      height: 24px;
      width: 24px;
      position: absolute;
      right: -12px;
      top: -12px;
      transform: ${props => props.isDark ? `translate(14px, -14px)` : `translate(0, 0)`};
      transition: transform 0.45s ease 0s;
      opacity: ${props => props.isDark ? 0 : 1};
    }
    &:after{
      content: "";
      border-radius: 50%;
      height: 8px;
      left: 50%;
      margin: -4px 0px 0px -4px;
      position: absolute;
      top: 50%;
      width: 8px;
      transform: scale(1);
      transition: all 0.35s ease 0s;
      box-shadow: 0 -23px 0 #635e69, 0 23px 0 #635e69, 23px 0 0 #635e69, -23px 0 0 #635e69, 15px 15px 0 #635e69,-15px 15px 0 #635e69, 15px -15px 0 #635e69, -15px -15px 0 #635e69;
      transform: ${props => props.isDark ? `scale(0.92)` : `scale(0)`}
    }
  }
  .circle-top{
    background: #ffffff;
    background: ${props => props.isDark ? `transparent` : `#ffffff`};
    border-radius: 50%;
    border: 0px none;
    opacity: ${props => props.isDark ? 0 : 1};
    position: absolute;
    right: 0px;
    top: 0px;
    transform: ${props => props.isDark ? `translate(14px, -14px)` : `translate(0, 0)`};
    transition: background 0.25s ease 0s, transform 0.45s ease 0s;
    height: 24px;
    width: 24px;
  }
`

const ColorModeToggle = ({isDark, toggle}) => (
  <ToggleBtn
    type="button"
    onClick={toggle}
    aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    isDark={isDark}
  >
    <div className="circle" />
    <div className="circle-top" />
  </ToggleBtn>
)

export default ColorModeToggle;