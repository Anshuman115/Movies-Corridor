import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '20px',
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    whiteSpace: 'nowrap',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
}));
