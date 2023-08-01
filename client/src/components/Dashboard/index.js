import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SubBars from '../Subscriptions/chart';
import UtilBars from '../Utilities/chart';
import LeisureBars from '../Leisure/chart';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard({ open }) {
  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl"
        sx={{
          bgcolor: '#cfe8fc',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
         <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={2}
          sx={{
            maxWidth: '1200px',
            width: '100%',
            mt: 10, 
            mb: 2 
          }}>
            
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
            <Box gridColumn="span 3">
              <Card sx={{ maxWidth: 10000 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent sx={{ mt: 2, mb: 2 }}>
                  <Typography  gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
            <Box gridColumn="span 1">
            <Card sx={{ maxWidth: 10000 }}>
               <SubBars />
              </Card>
            </Box>
            <Box gridColumn="span 1">
            <Card sx={{ maxWidth: 10000 }}>
               <UtilBars />
              </Card>
            </Box>
            <Box gridColumn="span 1">
            <Card sx={{ maxWidth: 10000 }}>
               <LeisureBars />
              </Card>
            </Box>
            <Box gridColumn="span 3">
              <Card sx={{ maxWidth: 10000 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent sx={{ mt: 2, mb: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
            <Box gridColumn="span 3">
              <Card sx={{ maxWidth: 10000 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent sx={{ mt: 2, mb: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
            <Box gridColumn="span 3">
              <Card sx={{ maxWidth: 10000 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent sx={{ mt: 2, mb: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography sx={{ mt: 2, mb: 2 }}  variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
            
            
          </Box>

        </Box>
      </Container>
    </React.Fragment>
  );
}

