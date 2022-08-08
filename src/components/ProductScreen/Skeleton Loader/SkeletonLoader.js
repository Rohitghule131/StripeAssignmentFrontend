import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

export default function SkeletonLoader() {
  return (
    <Container style={{"marginTop":"10px"}}>

    <Grid container spacing={2}>
        <Grid item xs={8}>
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
        </Grid>
        <Grid item xs={4}>
      <Skeleton variant="rectangular" width={400} height={400} />
      <Grid container spacing={4}>
      <Grid item xs={1}>
      <Skeleton variant="circular" width={10} height={10} />
        </Grid>
        <Grid item xs={1}>
      <Skeleton variant="circular" width={10} height={10} />
        </Grid>
        <Grid item xs={1}>
      <Skeleton variant="circular" width={10} height={10} />
        </Grid>
        <Grid item xs={1}>
      <Skeleton variant="circular" width={10} height={10} />
        </Grid>
      </Grid>

        </Grid>
    </Grid>
    </Container>
  );
}