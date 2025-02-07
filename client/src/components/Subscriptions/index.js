import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SubBars from '../Subscriptions/chart';
import ModalSub from './modal';
import SubList from './list';
import Navbar from '../Navbar/index';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Auth from '../../utils/auth';
import Redirect from './redirect';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Subs = ({ open }) => {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);

  // Load subscriptions from local storage when the component mounts
  useEffect(() => {
    const savedSubscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    setSubscriptions(savedSubscriptions);
  }, []);

  // Function to save subscriptions to local storage when it updates
  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const addSubscription = (newSubscription) => {
    setSubscriptions((prevSubscriptions) => [...prevSubscriptions, newSubscription]);
  };

  const deleteSubscription = (index) => {
    const updatedSubscriptions = [...subscriptions];
    updatedSubscriptions.splice(index, 1);
    setSubscriptions(updatedSubscriptions);
  };

  const editSubscription = (index, editedSubscription) => {
    const updatedSubscriptions = [...subscriptions];
    updatedSubscriptions[index] = editedSubscription;
    setSubscriptions(updatedSubscriptions);
  };

  return (
    <>
      {
        Auth.loggedIn() ? (
          <React.Fragment>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Navbar />
              <Container
                maxWidth="xxl"
                sx={{
                  bgcolor: 'grey',
                  minHeight: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginLeft: '64px',
                  marginTop: '64px',
                  paddingLeft: '50px',
                }}
              >
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(3, 1fr)"
                  gap={2}
                  sx={{
                    maxWidth: '1200px',
                    width: '100%',
                    marginRight: '50px',
                    paddingRight: '50px'
                  }}
                >
                  <Box gridColumn="span 3">
                    <Card>
                      <CardMedia image="/static/images/cards/contemplative-reptile.jpg" title="green iguana" />
                      <CardContent sx={{ mt: 2, mb: 2 }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Welcome to Your Subscriptions!
                        </Typography>
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary">
                          Below, you will find a list of all subscriptions and their corresponding costs that you pay for on a monthly basis. Click the "Add Sub" button to add additional subscriptions or click the trashcan icon to remove a subscription.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          The bar graph below will chart out your most expensive subscriptions
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>

                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                            Your Subscriptions
                            <SubList subscriptions={subscriptions} onDeleteSubscription={deleteSubscription} onEditSubscription={editSubscription} />
                          </Typography>
                        </Box>
                      </CardContent>

                      <CardActions sx={{ justifyContent: 'center' }}>
                        <ModalSub addSubscription={addSubscription} />
                      </CardActions>
                    </Card>
                  </Box>

                  <Box gridColumn="span 3" sx={{ width: "100%", maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}>
                    <Card>
                      {
                        subscriptions.length === 0 ? (<h1>no data</h1>) : (<SubBars subscriptions={subscriptions} />)
                      }

                    </Card>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </React.Fragment>
        ) : (
          <Redirect />
        )
      }
    </>
  );
};

export default Subs;









