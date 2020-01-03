import * as Yup from 'yup';

export const ContactSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Debe contener tres caracteres o más')
    .max(30, 'Debe contener 30 caracteres o menos')
    .required('Nombre requerido'),
  email: Yup.string()
    .email('Dirección de correo no valida')
    .required('Email requerido'),
  message: Yup.string()
    .min(10, 'Debe contener tres caracteres o más')
    .required('Mensahe requerido'),
})