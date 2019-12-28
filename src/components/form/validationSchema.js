import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Correo invalido.')
    .required('Correo electrónico requerido.'),
  name: Yup.string()
    .required('Nombre requerido.')
    .min(3, 'Muy corto.')
    .max(20, 'Muy largo.'),
});