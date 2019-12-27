import '../../styles/base.css'

export const lightTheme = {
  body: 'var(--white)',
  title: 'var(--dark-700)',
  text: 'var(--dark-700)',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  logo: 'var(--dark-700)',
  filter: 'invert(0)',
  background: 'var(--light-500)',
  form: {
    background: 'var(--white)',
    text: 'var(--grey-100)',
  },
}

export const darkTheme = {
  body: 'var(--dark-700)',
  title: 'var(--white)',
  text: 'var(--light-500)',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  logo: 'var(--white)',
  filter: 'invert(1)',
  background: 'var(--dark-500)',
  form: {
    background: 'var(--grey-700)',
    text: 'var(--grey-300)',
  },
}