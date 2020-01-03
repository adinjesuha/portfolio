import React from 'react'
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'
import { ContactSchema } from './validationSchema'
import { CustomLabelChecked } from './customLabelChecked'
import { Error } from './error'



const FormWrapper = styled.div`
  /* background: ${({theme}) => theme.background}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  form{
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

const SuccessMessage = styled.div`
  visibility: ${({show}) => show ? 'visible' : 'hidden'};
  opacity: ${({show}) => show ? '1' : '0'};
`

const ContactForm = () => {
  return (
    <FormWrapper>
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
          <div>
            <p>Como puedo ayudarte?</p>
            <Field
              component="textarea" 
              name="message" 
              rows="4"
              placeholder="Tu mensaje...*" 
            />
            <Error show={errors.message && touched.message}>
              {errors.message}
            </Error>
          </div>
          {status && status.success 
            ? <SuccessMessage show={status}>
              <p>Gracias, {values.name}</p>
              <p>Me pondre en contacto contigo en las proximas 24 horas.</p>
            </SuccessMessage>
            : null
          }
          <button 
            className="btn-primary btn-form"
            type="submit"
            disabled={!isValid || isSubmitting}
          >{isSubmitting ? <span>Enviando...</span> : <span>Enviar</span>}</button>
        </Form>
      )}
      </Formik>
    </FormWrapper>
  )
}

export default ContactForm