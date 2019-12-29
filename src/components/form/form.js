import React from 'react'
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components'
import * as Yup from 'yup';

import { device } from '../../utils/brakpoints'
import { ContactSchema } from './validationSchema'
import { CustomLabelChecked } from './customLabelChecked'
import { Error } from './error'



const FormWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  .heading{
    text-align: center;
    h2, h3{
      margin: 0;
    }
    h3{
      font-weight: 300;
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

const SuccessMessage = styled.div`
  visibility: ${({show}) => show ? 'visible' : 'hidden'};
  opacity: ${({show}) => show ? '1' : '0'};
`

const ContactForm = () => {
  return (
    <FormWrapper className="theme-bg">
      <div className="heading">
        <h3>Tienes algún proyecto en mente?</h3>
        <h2>Agenda una reunión</h2>
      </div>
      <Formik 
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setStatus, setSubmitting }) => {
          setTimeout(() => {
            console.log('from submit: ', values)
            setStatus({
              success: 'Sending email...',
              css: 'sending'
            })
            setSubmitting(false);
            setStatus({
              success: 'Email sent !',
              css: 'success'
            })
          }, 300);
        }}
      >
      {({ 
        values, 
        isSubmitting, 
        errors, 
        touched,
        isValid,
        status
       }) => (
        <Form>
          <Field 
            type="text"
            name="name" 
            placeholder="Tu nombre*" 
          />
          <Error show={errors.name && touched.name}>
            {errors.name}
          </Error>
          <Field 
            type="email"
            name="email"
            placeholder="Tu correo electrónico*"
          />
          <Error show={errors.email && touched.email}>
            {errors.email}
          </Error>
          <div className="project-type">
            <p>Tipo de proyecto:</p>
            <div className="radio-group">
              <div>
                <Field
                  id="type_Website"
                  type="radio"
                  name="projectType"
                  value="Website"
                />
                <CustomLabelChecked 
                  htmlFor="type_Website" 
                  isChecked={values.projectType === "Website"}
                >Website</CustomLabelChecked>
              </div>
              <div>
                <Field 
                  id="type_PWA"
                  type="radio" 
                  name="projectType"
                  value="PWA"
                />
                <CustomLabelChecked 
                  htmlFor="type_PWA" 
                  isChecked={values.projectType === "PWA"}
                >PWA</CustomLabelChecked>
              </div>
              <div>
                <Field 
                  id="type_eCommerce"
                  type="radio" 
                  name="projectType"
                  value="eCommerce"
                />
                <CustomLabelChecked 
                  htmlFor="type_eCommerce" 
                  isChecked={values.projectType === "eCommerce"}
                >eCommerce</CustomLabelChecked>
              </div>
              <div>
                <Field 
                  id="type_Otros"
                  type="radio" 
                  name="projectType"
                  value="Otros"
                />
                <CustomLabelChecked 
                  htmlFor="type_Otros" 
                  isChecked={values.projectType === "Otros"}
                >Otros</CustomLabelChecked>
              </div>
            </div>
          </div>
          <Field
            component="textarea" 
            name="message" 
            rows="4"
            placeholder="En que puedo ayudarte?" 
          />
          {status && status.success 
            ? <SuccessMessage show={status}>
              <p>Gracias, {values.name}</p>
              <p>Me pondre en contacto contigo en las proximas 24 horas.</p>
            </SuccessMessage>
            : null
          }
          <button 
            className="btn-primary"
            type="submit"
            disabled={!isValid || isSubmitting}
          >{isSubmitting ? <span>Enviando...</span> : <span>Enviar Consulta</span>}</button>
        </Form>
      )}
      </Formik>
    </FormWrapper>
  )
}

export default ContactForm