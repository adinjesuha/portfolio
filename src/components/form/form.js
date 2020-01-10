import React from 'react'
import {navigate} from 'gatsby'
import { Formik, Form, Field } from 'formik';

import { ContactSchema } from './validationSchema'
import { CustomLabelChecked, Error, FormWrapper } from './styles'

const ContactForm = () => {
  return (
    <FormWrapper>
      <Formik 
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch("../../../functions/airtable", {
            method: "POST",
            body: JSON.stringify(values)
          })
          .then(() => {
            setSubmitting(false)
            navigate("/thank-you", { replace: true })
          })
          .catch(error => alert(error))
        }}
      >
      {({ values, isSubmitting, errors, touched,isValid }) => (
        <Form>
          <Field 
            type="text"
            name="name" 
            placeholder="Tu nombre *" 
          />
          <Error show={errors.name && touched.name}>{errors.name}</Error>
          <Field 
            type="email"
            name="email"
            placeholder="Tu correo electrónico *"
          />
          <Error show={errors.email && touched.email}>{errors.email}</Error>
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
              placeholder="Tu mensaje... *" 
            />
            <Error show={errors.message && touched.message}>{errors.message}</Error>
          </div>
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