import React from 'react'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'

const FormWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  .heading{
    text-align: center;
    span, h2{
      margin: 0;
    }
    span{
      color: var(--brand);
    }
    h2{
      font-weight: 300;
      margin-top: 1rem;
      margin-bottom: 4rem;
    }
  }
  form{
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
        label{
          cursor: pointer;
          font-size: 1.6rem;
          display: block;
          border-radius: 0.4rem;
          border: 1px solid var(--brand);
          padding: 1rem 1.6rem;
          transition: transform .15s cubic-bezier(0,.89,.44,1), background .15s cubic-bezier(.165,.84,.44,1);
        }
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

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('submitting')
  }
  return (
    <FormWrapper className="theme-bg">
      <div className="heading">
        <span>Tienes algún proyecto en mente?</span>
        <h2>Agenda una reunión</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Tu nombre *"/>
        <input type="email" placeholder="Correo electronico *"/>
        <div className="project-type">
          <p>Tipo de proyecto:</p>
          <div className="radio-group">
            <div>
              <input id="type_Website" type="radio" name="projectType" value="Website"/>
              <label htmlFor="type_Website">Website</label>
            </div>
            <div>
              <input id="type_PWA" type="radio" name="projectType" value="PWA"/>
              <label htmlFor="type_PWA">PWA</label>
            </div>
            <div>
              <input id="type_eCommerce" type="radio" name="projectType" value="eCommerce"/>
              <label htmlFor="type_eCommerce">eCommerce</label>
            </div>
            <div>
              <input id="type_Otros" type="radio" name="projectType" value="Otros"/>
              <label htmlFor="type_Otros">Otros</label>
            </div>
          </div>
        </div>
        <textarea name="message" rows="4" placeholder="En que puedo ayudarte?"></textarea>
        <button className="btn-primary" type="submit">Enviar Consulta</button>
      </form>
    </FormWrapper>
  )
}

export default Form
