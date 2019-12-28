import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components'
import * as Yup from 'yup';

import { device } from '../../utils/brakpoints'

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo invalido.')
    .required('Correo electrónico requerido.'),
  name: Yup.string()
    .required('Nombre requerido.')
    .min(3, 'Muy corto.')
    .max(20, 'Muy largo.'),
});

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

const CustomLabelChecked = styled.label`
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

const ErrorMessage = styled.div`
  color: var(--dark-700);
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? '1' : '0'};
  transform: translateY(${ props  => props.show ? '20px' : '10px'});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 2rem;
  font-weight: 500;
  font-size: 1.2rem;
`;

const ContactForm = () => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    selected: '',
    message: ''
  });
  const handleChange = e => {
    e.target.type === 'radio' 
    ? setValues({
      ...values, 
      selected: e.currentTarget.value 
    }) 
    : setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return (
    <FormWrapper className="theme-bg">
      <div className="heading">
        <h3>Tienes algún proyecto en mente?</h3>
        <h2>Agenda una reunión</h2>
      </div>
      <Formik 
        initialValues={{values}}
        validationSchema={ContactSchema}
        onSubmit={({values: { name, email }}, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setValues({
              email: '',
              name: '',
              selected: '',
              message: ''
            })
          }, 8000);
        }}
      >
      {({ isSubmitting, isValid, errors, touched }) => (
        <Form>
          <Field 
            type="text"
            name="name" 
            placeholder="Tu nombre*" 
            onChange={handleChange}
            value={values.name}
          />
          <ErrorMessage show={errors.name && touched.name}>
            {console.log(errors.name, touched.name)}
            {errors.name}
          </ErrorMessage>
          <Field 
            type="email"
            name="email"
            placeholder="Tu correo electrónico*"
            onChange={handleChange}
            value={values.email}
          />
          <ErrorMessage show={errors.email && touched.email}>
            {errors.email}
          </ErrorMessage>
          <div className="project-type">
            <p>Tipo de proyecto:</p>
            <div className="radio-group">
              <div>
                <Field
                  id="type_Website"
                  type="radio"
                  name="projectType"
                  value="Website"
                  onChange={handleChange}
                />
                <CustomLabelChecked 
                  htmlFor="type_Website" 
                  isChecked={values.selected === "Website"}
                >Website</CustomLabelChecked>
              </div>
              <div>
                <Field 
                  id="type_PWA"
                  type="radio" 
                  name="projectType"
                  value="PWA"
                  onChange={handleChange}
                />
                <CustomLabelChecked 
                  htmlFor="type_PWA" 
                  isChecked={values.selected === "PWA"}
                >PWA</CustomLabelChecked>
              </div>
              <div>
                <Field 
                  id="type_eCommerce"
                  type="radio" 
                  name="projectType"
                  value="eCommerce"
                  onChange={handleChange}
                />
                <CustomLabelChecked 
                  htmlFor="type_eCommerce" 
                  isChecked={values.selected === "eCommerce"}
                >eCommerce</CustomLabelChecked>
              </div>
              <div>
                <Field 
                  id="type_Otros"
                  type="radio" 
                  name="projectType"
                  value="Otros"
                  onChange={handleChange}
                />
                <CustomLabelChecked 
                  htmlFor="type_Otros" 
                  isChecked={values.selected === "Otros"}
                >Otros</CustomLabelChecked>
              </div>
            </div>
          </div>
          <textarea 
            name="message" 
            rows="4"
            placeholder="En que puedo ayudarte?" 
            value={values.message}
            onChange={handleChange}
          />
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

// <form>
//   <input type="text" placeholder="Tu nombre *"/>
//   <input type="email" placeholder="Correo electronico *"/>
//   <div className="project-type">
//     <p>Tipo de proyecto:</p>
//     <div className="radio-group">
//       <div>
//         <input id="type_Website" type="radio" name="projectType" value="Website"/>
//         <label htmlFor="type_Website">Website</label>
//       </div>
//       <div>
//         <input id="type_PWA" type="radio" name="projectType" value="PWA"/>
//         <label htmlFor="type_PWA">PWA</label>
//       </div>
//       <div>
//         <input id="type_eCommerce" type="radio" name="projectType" value="eCommerce"/>
//         <label htmlFor="type_eCommerce">eCommerce</label>
//       </div>
//       <div>
//         <input id="type_Otros" type="radio" name="projectType" value="Otros"/>
//         <label htmlFor="type_Otros">Otros</label>
//       </div>
//     </div>
//   </div>
//   <textarea name="message" rows="4" placeholder="En que puedo ayudarte?"></textarea>
//   <button className="btn-primary" type="submit">Enviar Consulta</button>
// </form>
