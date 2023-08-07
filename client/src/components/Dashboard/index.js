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
import Auth from '../../utils/auth';
import ModalDash from './modal';
import ExpenseTabs from './expenses';
import { borders } from '@mui/system';
import Redirect from './redirect';
import MainnImage from './assets/fintrackr_better.png';





import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../Navbar/index';
import MainImage from './assets/fintracker.png';


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

export default function Dashboard({ open }) {
  const leisures = JSON.parse(localStorage.getItem('leisures')) || [];
  console.log("leisures",leisures);
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
  const utilities = JSON.parse(localStorage.getItem('utilities')) || [];

const totalLeisure = leisures.reduce((acc, curr) => acc + curr.amount, 0);
const formattedLeisure =  totalLeisure.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const totalSubs = subscriptions.reduce((acc, curr) => acc + curr.amount, 0);
const formattedSubs =  totalSubs.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const totalUtils = utilities.reduce((acc, curr) => acc + curr.amount, 0);
const formattedUtils =  totalUtils.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const commonStyles = {
  bgcolor: 'background.paper',
 
};
  return (
    <>
      {
        Auth.loggedIn() ? (
          <ThemeProvider theme={darkTheme}>
            <React.Fragment>
              <CssBaseline />
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
                        <Typography gutterBottom variant="h5" component="div" align="center">
                          Welcome to Your Dashboard!
                        </Typography>
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2" color="text.secondary" align="center">
                        <ModalDash />
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                          <ExpenseTabs />
                        </Typography>

                      </CardContent>
                    </Card>
                  </Box>
                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div" align='center'>
                            Your Total Expenses For Subscriptions: {formattedSubs}
                            <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                            {
                              subscriptions.length === 0 ? (<h1>no data</h1>) : (<SubBars subscriptions={subscriptions} />)
                            }
                            </Box>
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div" align='center'>
                            Your Total Expenses For Utilities: {formattedUtils}
                            <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                            {
                              utilities.length === 0 ? (<h1>no data</h1>) : (<UtilBars utilities={utilities} />)
                            }
                            </Box>
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box gridColumn="span 3" sx={{ justifyContent: 'center' }}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                          <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div" align='center'>
                            Your Total Expenses For Leisure: {formattedLeisure}
                            <Box sx={{ ...commonStyles, borderColor: 'primary.main' }}>
                            {
                              leisures.length === 0 ? (<h1>no data</h1>) : (<LeisureBars leisures={leisures} />)
                            }
                            </Box>
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                  <Card>
                  </Card>
                </Box>
              </Container>
            </React.Fragment>
          </ThemeProvider>
        ) : (
          
          <Redirect />
        )
      }
    </>
  );
};



