const dark700 = '#15181E';
const dark500 = '#212429';
const dark300 = '#35383D';

const grey500 = '#575B60'
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
  borderColor: light500,
  toggleMenuButton: dark700,
  form: {
    background: white,
    text: grey100,
  },
  card: {
    bodyText: grey500,
    footerText: grey100,
    underline: 'rgba(4,40,37,.2)',
    underlinAfter: '#042825'
  }
}

export const darkTheme = {
  body: dark700,
  title: white,
  text: light500,
  toggleBorder: '#6B8096',
  logo: white,
  filter: 'invert(1)',
  background: dark500,
  borderColor: dark300,
  toggleMenuButton: white,
  form: {
    background: dark700,
    text: dark300,
  },
  card: {
    bodyText: grey500,
    footerText: grey100,
    underline: 'rgba(255,255,255,.2)',
    underlinAfter: 'rgba(255,255,255,.4)',
  }
}