import { Box, Card, IconButton, styled } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import movie from 'assets/img/movie.png';
import { RegularButton } from 'components';

const MovieCard = () => {
  // style
  const CustomizedCard = styled(Card, {
    name: 'CustomizedCard',
    slot: 'Root',
  })(() => ({
    padding: '32px 0 32px 0',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 24px 48px -8px #274C7729',
    height: '296px',
    backgroundImage: `url(${movie})`,
  }));
  const Label = styled('span', {
    name: 'Label',
    slot: 'Root',
  })(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '24px',
    fontWeight: 'bold',
    paddingBottom: '16px',
  }));
  const TitleText = styled('span', {
    name: 'TitleText',
    slot: 'Root',
  })(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '20px',
    fontWeight: 'bold',
  }));
  const DescriptionText = styled('span', {
    name: 'DescriptionText',
    slot: 'Root',
  })(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '15px',
    lineHeight: '170%',
    paddingBottom: '16px',
  }));

  // render
  return (
    <CustomizedCard elevation={0}>
      <Box width='64px' display='flex' justifyContent='center' alignItems='center'>
        <IconButton sx={{ width: '1.5em', height: '1.5em' }}>
          <ArrowLeftIcon sx={{ fontSize: '64px' }} color='primary' />
        </IconButton>
      </Box>
      <Box display='flex' flexDirection='column' flex='1'>
        <Label>Tonight's Movie Suggestion</Label>
        <Box display='flex' justifyContent='space-between' pb={2}>
          <TitleText>Spider-Man - No Way Home (2021)</TitleText>
          <Box sx={{ color: '#E7ECEF', fontSize: '13px' }} display='flex' alignItems='center'>
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />
            <span style={{ opacity: 0.7, paddingLeft: '8px' }}>(12846 reviews)</span>
          </Box>
        </Box>
        <DescriptionText>
          With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able
          to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for
          help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means
          to be Spider-Man.
        </DescriptionText>
        <RegularButton
          variant='contained'
          sx={{ width: '125px', height: '35px', fontSize: '14px', fontWeight: 'bold', mb: 2 }}
          disableElevation
        >
          Choose
        </RegularButton>
        <Box display='flex' justifyContent='center' sx={{ gap: 1, fontSize: '18px' }} color='primary.main'>
          <span>•</span>
          <span>•</span>
          <span>•</span>
          <span style={{ color: '#516F91' }}>•</span>
          <span>•</span>
        </Box>
      </Box>
      <Box width='64px' display='flex' justifyContent='center' alignItems='center'>
        <IconButton sx={{ width: '1.5em', height: '1.5em' }}>
          <ArrowRightIcon sx={{ fontSize: '64px' }} color='primary' />
        </IconButton>
      </Box>
    </CustomizedCard>
  );
};

export default MovieCard;
