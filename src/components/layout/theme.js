const dark700 = '#15181E';
const dark500 = '#212429';
const dark300 = '#35383D';

const grey100 = '#BBBBBB';

const light500 = '#F7FAFD';
const white = '#ffffff';

export const lightTheme = {
  body: white,
  title: dark700,
  text: dark700,
  toggleBorder: white,
  logo: dark700,
  filter: 'invert(0)',
  background: light500,
  navbarBackground: white,
  borderColor: light500,
  form: {
    background: white,
    text: grey100,
  },
}

export const darkTheme = {
  body: dark700,
  title: white,
  text: light500,
  toggleBorder: '#6B8096',
  logo: white,
  filter: 'invert(1)',
  background: dark500,
  navbarBackground: dark700,
  borderColor: dark300,
  form: {
    background: dark700,
    text: dark300,
  },
}