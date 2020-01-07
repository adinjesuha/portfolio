const dark700 = '#15181E';
const dark500 = '#1B1F26';
const dark300 = '#35383D';

const grey500 = '#575B60'
const grey300 ='#9CA1A6';
const grey100 = '#f9f9f9';

const light500 = '#F7FAFD';
const white = '#fff';

export const lightTheme = {
  body: white,
  title: dark700,
  text: dark700,
  toggleBorder: white,
  filter: 'invert(0)',
  background: grey100,
  borderColor: light500,
  toggleMenuButton: dark700,
  form: {
    background: white,
    text: grey500,
    borderColor: 'rgba(0,0,0,.2)'
  },
  card: {
    bodyText: grey500,
    footerText: grey300,
    underline: 'rgba(4,40,37,.2)',
    underlinAfter: '#042825'
  }
}

export const darkTheme = {
  body: dark700,
  title: white,
  text: light500,
  toggleBorder: '#6B8096',
  filter: 'invert(1)',
  background: dark500,
  borderColor: dark300,
  toggleMenuButton: white,
  form: {
    background: dark700,
    text: light500,
    borderColor: 'rgba(255,255,255,.4)'
  },
  card: {
    bodyText: grey500,
    footerText: grey100,
    underline: 'rgba(255,255,255,.2)',
    underlinAfter: 'rgba(255,255,255,.4)',
  }
}