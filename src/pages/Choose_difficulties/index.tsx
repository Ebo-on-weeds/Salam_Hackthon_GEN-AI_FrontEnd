import React from 'react';
import { Box } from '@mui/material';
import BasicCard from '../../common/Card/card';

const ChooseDifficulties = () => {
  const handleCardClick = (difficulty: string) => {
    console.log(`Selected difficulty: ${difficulty}`);
    // Navigate to the respective page or perform an action
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: 4,
        flexWrap: 'wrap',
      }}
    >
      <BasicCard
        Title="Dyslexia"
        basicDescription="Learn more about tools and resources for Dyslexia."
        image="../../public/img/jpeg/dyselxai_bg.jpg"
        onClick={() => handleCardClick('Dyslexia')}
      />
      <BasicCard
        Title="ADHD"
        basicDescription="Learn more about tools and resources for ADHD."
        image="../../public/img/jpeg/ADHD_bg.jpg"
        onClick={() => handleCardClick('ADHD')}
      />
    </Box>
  );
};

export default ChooseDifficulties;