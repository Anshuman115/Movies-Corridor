import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '7% 0',
  },
  image: {
    width: '90%',
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  genreImage: {
    height: '18px',
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  },
}));
