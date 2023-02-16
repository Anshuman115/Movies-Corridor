import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '7% 0',
  },
  image: {
    width: '90%',
  },
  sidebar: {
    backgroundColor: '#520166',

  },
  links: {
    color: 'white',
    textDecoration: 'none',
  },
  genreImage: {
    height: '18px',
    // filter: theme.palette.mode === 'dark' && 'invert(1)',
    filter: 'invert(1)',
  },
}));
