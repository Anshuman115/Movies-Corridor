import { ArrowBack } from '@mui/icons-material';
import { Button, ButtonGroup, CircularProgress, Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetActorsDetailsQuery, useGetMoviesByActorQuery } from '../../services/TMDB';
import useStyles from './styles';
import { MovieList, Pagination } from '..';

function Actors() {
  const [page, setPage] = useState(1);
  const classes = useStyles();
  const { id } = useParams();
  console.log('id is', id);
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorQuery({ id, page });
  console.log('data is', data);
  const navigate = useNavigate();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate.goBack()}>
          Go Back
        </Button>
      </Box>
    );
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        <Grid item styles={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} xl={8} lg="7">
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born:{new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || 'sorry no bio yet'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button variant="contained" color="primary" target="_blank" href={`http://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
              Back
            </Button>
          </Box>
          <Grid item container spacing={2}>
            {data
            && data.credits?.cast
              ?.map(
                (character, i) => character.profile_path && (
                <Grid
                  key={i}
                  item
                  xs={4}
                  md={2}
                  component={Link}
                  to={`/actors/${character.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    className={classes.castImage}
                    src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                    alt={character.name}
                  />
                  <Typography color="textPrimary">
                    {character?.name}
                  </Typography>
                  <Typography color="textSecondary">
                    {character?.character.split('/')[0]}
                  </Typography>
                </Grid>
                ),
              )
              .slice(0, 8)}
          </Grid>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </>

  );
}

export default Actors;

// useparams to get actors id
// using redux toolkit query make a new call getactorsdetials call
// /check tmbd website
// use newly created hook to show the details

