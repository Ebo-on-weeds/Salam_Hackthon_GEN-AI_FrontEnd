import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

interface BasicCardProps {
  image: string;
  Title: string;
  basicDescription: string;
  onClick: () => void; // Function to handle card click
}

export default function BasicCard(props: BasicCardProps) {
  return (
    <Card
      sx={{
        width: 320,
        cursor: 'pointer', // Add pointer cursor for better UX
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 4px 20px rgba(0, 255, 0, 0.7)', // Green shadow on hover
        },
      }}
      onClick={props.onClick} // Trigger the onClick function when the card is clicked
    >
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={props.image}
          loading="lazy"
          alt={props.Title}
        />
      </AspectRatio>
      <CardContent orientation="vertical">
        <Typography level="title-lg">{props.Title}</Typography>
        <Typography level="body-sm">{props.basicDescription}</Typography>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label={`Explore ${props.Title}`}
          fullWidth
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}